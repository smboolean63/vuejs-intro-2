const app = new Vue({
    el: '#app',
    data: {
        tempoBello: true,
        eta: 18,
        patente: false,
        menuAperto: false,
        studenti: [
            {
                name: 'Paolo',
                surname: 'Bianchi',
                showSurname: false,
            },
            {
                name: 'Franco',
                surname: 'Bianchi',
                showSurname: false,
            },
            {
                name: 'Luisa',
                surname: 'Rossi',
                showSurname: false,
            },
        ],
    },
    methods: {
        possoGuidare() {
            return this.eta >= 18 && this.patente;
        },
        toggleMenu() {
            // if(this.menuAperto) {
            //     this.menuAperto = false;
            // } else {
            //     this.menuAperto = true;
            // }
            // this.menuAperto = this.menuAperto ? false : true;
            this.menuAperto = !this.menuAperto;
        },
        saluta(i) {
            // alert(this.studenti[i].surname);
            this.studenti[i].showSurname = !this.studenti[i].showSurname;
        }
    },
});