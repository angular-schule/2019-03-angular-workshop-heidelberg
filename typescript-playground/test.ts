export class Test {

    constructor(private slogan: string) {
        console.log(this.slogan);
    }

    dieAntwort(frage: string) {
        return frage + 42;
    }
}