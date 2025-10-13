const services = [
    {
        id : 1,
        title : "Digestive Problems",
        description: "We provide the best treatment for digestive problems. Our team of experts will help you to get rid of digestive problems.",
    }
    ,
    {
        id : 2,
        title : "Heart Problems",
        description: "We provide the best treatment for heart problems. Our team of experts will help you to get rid of heart problems.",
    }
    ,
    {
        id : 3,
        title : "Bone Problems",
        description: "We provide the best treatment for bone problems. Our team of experts will help you to get rid of bone problems.",
    }
    ,
    {
        id : 4,
        title : "Skin Problems",
        description: "We provide    the best treatment for skin problems. Our team of experts will help you to get rid of skin problems.",
    }
    ,
    {
        id : 5,
        title : "Eye Problems",
        description: "We provide the best treatment for eye problems. Our team of experts will help you to get rid of eye problems.",
    }
    ,
    {
        id : 6,
        title : "Ear Problems",
        description: "We provide the best treatment for ear problems. Our team of experts will help you to get rid of ear problems.",
    }
]

function generateServiceHtml(service) {
    return `
        <div class="bg-white shadow-lg hover:scale-105 transform transition duration-500 p-5 rounded-lg cursor-pointer overflow-hidden">
            <div class="p-6 text-left"> 
                <img src="./images/service-icon.png" alt="service" class="w-5 h-5 object-cover">

                <h3 class="text-2xl font-semibold my-4 mt-5">${service.title}</h3>
                <p class="text-gray-500 mb-4 mt-4">${service.description}</p>


        </div>
    `
}

const servicesContainer = document.getElementById("service-container");

servicesContainer.innerHTML = services.map((service) => { return generateServiceHtml(service) }).join("");