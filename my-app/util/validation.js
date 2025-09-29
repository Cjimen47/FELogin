export function hasSpecialChars (value){
    return /[!@$%^*+#]/.test(value);
}

export function hasUpperCase(value){
    return /[A-Z]/.test(value);

}

export function hasNumber (value){
    return /\d/.test(value);

}

export function meetsLength (value){
    return value.length >= 8;
}