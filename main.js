const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';


function generateKey() {
        let result = '';
        let maxPosition = characters.length - 1;

            for(let i = 0; i < 16; i++) {

                position = Math.floor( Math.random() * maxPosition );
                result += characters.substring(position, position + 1);
            }

        return result;
}


const key = generateKey(16, characters);
console.log(key);






    