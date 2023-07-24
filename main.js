const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';


function generateKey(number, nameArr) {
        let result = '';
        let maxPosition = nameArr.length - 1;

            for(let i = 0; i < number; i++) {

                position = Math.floor( Math.random() * maxPosition );
                result += nameArr.substring(position, position + 1);
            }

        return result;
}


const key = generateKey(16, characters);
console.log(key);






    