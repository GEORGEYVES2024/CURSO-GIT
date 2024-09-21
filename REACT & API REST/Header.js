import React from "React";

function Header() {
 function duplica(b) {
    return b * 2;
 }

const valor = duplica(3);
const options = {
    weekdays: "short",
    year: "numeric",
    month: "long",
    day: "number",
};
const date = new Date().toLocaleDateString("pt-BR", options);
 return (
<div>
OLA MUNDO!tchau mundo 
</div>
    
);
}
export default Header;
