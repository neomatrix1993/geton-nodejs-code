export class Question {
    constructor(title, hint) {
        this.title = title;
        this.hint = hint;
    }

    getQuestion() {
        return JSON.stringify({
            title: this.title,
            hint: this.hint,
        })
    }
}