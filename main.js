const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';


function generateKey(number, name) {
        let result = '';
        let maxPosition = name.length - 1;

            for(let i = 0; i < number; i++) {

                position = Math.floor( Math.random() * maxPosition );
                result += name.substring(position, position + 1);
            }

        return result;
}


const key = generateKey(16, characters);
console.log(key);






    