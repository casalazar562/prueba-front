export default {
    name: "SupportView",
    components: {},
    data() {
        return {
            myArray: [
                { id: 1, name: "Carlos", roles: [1, 2] },
                { id: 2, name: "Ana", roles: [3, 4] },
                { id: 3, name: "Luis", roles: [2, 5] },
                { id: 4, name: "Marta", roles: [1, 3] },
                { id: 5, name: "Pedro", roles: [4, 5] },
            ],
            output: "",
        };
    },
    computed: {
        total() {
            return this.myArray.length;
        },
    },
    methods: {
        generateOutput() {
            this.output = `El total del listado es: ${this.total}`;
        },
    },
};