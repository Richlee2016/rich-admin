export default function(target, name, descriptor){
    target.loading = false;
    console.log(target, name, descriptor);
}