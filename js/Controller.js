export class Controller {
    constructor(view, model) {
        this.view = view
        this.model = model
    }

    start() {
        this.view.renderAddForm(this.model.phonebookContainerId)
        this.view.renderSearchContact(this.model.phonebookContainerId)
        this.view.renderChangeForm(this.model.phonebookContainerId)
        this.view.renderInfo(this.model.phonebookContainerId)
        this.view.renderNoContact(this.model.phonebookContainerId)
        this.view.renderContactsContainer(this.model.phonebookContainerId)
        this.view.renderContactsItem(this.model.phonebookContainerId)
    }
}
