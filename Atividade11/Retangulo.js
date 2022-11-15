function Retangulo(base, altura){
    this.base = base;
    this.altura = altura;
    
    this.calcularArea = () =>{
        return this.base * this.altura;
    };
}

var retangulo = new Retangulo(3,5);
alert('A Area é do Retangulo é: '+ retangulo.calcularArea());
