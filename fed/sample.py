import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split

# --- Load dataset (breast cancer dataset) ---
data = load_breast_cancer()
X, y = data.data, data.target

# Split into central and local datasets
X_central, X_rest, y_central, y_rest = train_test_split(X, y, test_size=0.6, random_state=42)
X_local1, X_local2, y_local1, y_local2 = train_test_split(X_rest, y_rest, test_size=0.5, random_state=42)

print("Central dataset size:", X_central.shape)
print("Local1 dataset size:", X_local1.shape)
print("Local2 dataset size:", X_local2.shape)

# --- Step 1: Train central model ---
central_model = LogisticRegression(max_iter=500)
central_model.fit(X_central, y_central)
print("Central model trained.")

# Evaluate on test split
X_test, X_valid, y_test, y_valid = train_test_split(X, y, test_size=0.2, random_state=1)
print("Central model accuracy:", accuracy_score(y_test, central_model.predict(X_test)))

# --- Step 2: Simulate local training ---
def local_update(model, X_local, y_local):
    """Simulate local training by fitting a clone of central model"""
    local_model = LogisticRegression(max_iter=500)
    local_model.coef_ = np.copy(model.coef_)
    local_model.intercept_ = np.copy(model.intercept_)
    local_model.classes_ = model.classes_
    local_model.fit(X_local, y_local)
    return local_model

local_model1 = local_update(central_model, X_local1, y_local1)
local_model2 = local_update(central_model, X_local2, y_local2)

# --- Step 3: Aggregate local updates into central model (Federated Averaging) ---
new_coef = (local_model1.coef_ + local_model2.coef_ + central_model.coef_) / 3
new_intercept = (local_model1.intercept_ + local_model2.intercept_ + central_model.intercept_) / 3

central_model.coef_ = new_coef
central_model.intercept_ = new_intercept

print("Updated central model after federated aggregation.")

# --- Step 4: Evaluate updated central model ---
print("Updated central model accuracy:", accuracy_score(y_test, central_model.predict(X_test)))
