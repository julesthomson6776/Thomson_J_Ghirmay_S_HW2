class Card {
    constructor(id, imageSource) {
        this.id = id;
        this.imageSource = imageSource;
        this.isFlipped = false;
    }

    flip() {
        this.isFlipped = !this.isFlipped;
    }
}


