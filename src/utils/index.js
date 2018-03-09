export const detection =  (res,fn) => {
    if(res.data.code === 1){
        fn&&fn();
    }
}