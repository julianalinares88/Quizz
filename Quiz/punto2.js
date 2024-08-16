//Ejercicio 2 

const ciudades = [
    {
        name: "Sydney",
        people: 2000
    },

    {
        name: "Madrid",
        people: 3000
    },
    {
        name: "Mexico",
        people: 4000
    },
    {
        name: "Santiago de chile",
        people: 5000
    },

    
    ];

    const poblacionmax = (Array) => {

        let maxpobl = Array[0];
    
        ciudades.forEach(city) => {
            if(city.people > maxpobl.people) {
                maxpobl = city;
        }
            
        }
    };
    const result = poblacionmax(ciudades);
    console.log(result);    



