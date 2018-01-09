const env   =   process.env;

export const nodeEnv   =   env.nodeENV || 'developement';

export const logStars   =   function(message){
    console.info('********************');
    console.info(message);
    console.info('********************');
};

export default {
    port: env.PORT || 3000
};