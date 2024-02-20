export default function Validation(values){
    const errors={}

    if(values.firstname === ""){
        errors.firstname = " First Name is Reuired!";
    }

    const email_pattern =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(values.email === ""){
        errors.email="Email is required!";
    }
    else if(!email_pattern.test(values.email))
        errors.email ="Email is invalid";
}