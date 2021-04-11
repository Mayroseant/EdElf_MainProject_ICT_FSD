export class ItemsModel{
    constructor(
        public itemTitle: String,
        public itemAbstract: String,
        public itemContent: String,
        public comments_author: String,
        public comments_editor: String,
        public comments_reviewer: String
    ){}
}