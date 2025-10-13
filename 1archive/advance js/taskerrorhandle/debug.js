tasks =[];



// add tasks .......................
function addTask(task){
    if(!task){
        throw new Error('task is required');
    }   
    tasks.push(task);

    console.log('task added:',task);
}

// delete tasks.....................
function deleteTask(index){
    
    if(index < 0 || index >= tasks.length){
        throw new Error('index must be positive and less than tasks length');
    }
    tasks.splice(index,1);
    
}

deleteTask(2);