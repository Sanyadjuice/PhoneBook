export class View {
    renderAddForm(phonebookContainerId) {
        const phonebookContainer = document.getElementById(phonebookContainerId);
        const formElement = document.createElement('form');

        formElement.classList.add('contact_form');
        formElement.setAttribute('id', 'add_form');
        formElement.innerHTML = `
                <input placeholder="Name" class="contact_name">
                <input placeholder="Phone number" type="tel" class="contact_number">
                <input placeholder="Position" class="contact_position">
                <button class="btn_add" type="submit">Add contact</button>`;
        phonebookContainer.append(formElement);
    }
    renderSearchContact(phonebookContainerId) {
        const phonebookContainer = document.getElementById(phonebookContainerId);
        const formElement = document.createElement('form');

        formElement.classList.add('search_contact');
        formElement.setAttribute('id', 'search');
        formElement.innerHTML = `
            <input type="search" placeholder="Search" class="search">
            <select class="search_select">
                <option value="name">Name</option>
                <option value="number">Number</option>
                <option value="position">Position</option>
            </select>
            <button class="btn_clear">Clear</button>`;
        phonebookContainer.append(formElement);
    }

    renderChangeForm(phonebookContainerId) {
        const phonebookContainer = document.getElementById(phonebookContainerId);
        const formElement = document.createElement('form');

        formElement.classList.add('contact_form');
        formElement.setAttribute('id', 'change_form');
        formElement.innerHTML = `
            <input placeholder="Name" class="contact_name"></input>
            <input placeholder="Phone number" type="tel" class="contact_number"></input>
            <input placeholder="Position" class="contact_position"></input>
            <button class="btn_add" type="submit">Change contact</button>
        `;
        phonebookContainer.append(formElement);
    }

    renderInfo(phonebookContainerId, dataContact) {
        const phonebookContainer = document.getElementById(phonebookContainerId);
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('about_contact_form')
        infoContainer.setAttribute('id', 'info_container')
        infoContainer.innerHTML =`
        <fieldset>
            <legend><b>INFO:</b> </legend>
            <h3 type="text" class="about_contact_name">${dataContact.name}</h3>
            <p type="text" class="about_contact_number" >${dataContact.phoneNumber}</p>
            <p type="text" class="about_contact_position" >${dataContact.position}</p>
            <div class="about_contact_btns">
                <button class="about_contact_back">Back</button>
            </div>
        </fieldset>
        `
        phonebookContainer.append(infoContainer)
    }

    renderNoContact(phonebookContainerId) {
        const phonebookContainer = document.getElementById(phonebookContainerId);
        const noContactContainer = document.createElement('div');
        noContactContainer.classList.add('about_contact_form')
        noContactContainer.setAttribute('id', 'nocontact')
        noContactContainer.innerHTML =`
        <p type="text" class="about_contact_number">No contacts</p>
        `
        phonebookContainer.append(noContactContainer)
    }

    renderContactsContainer(phonebookContainerId) {
        const phonebookContainer = document.getElementById(phonebookContainerId);
        const contactsContainer = document.createElement('div');
        contactsContainer.classList.add('about_contact_form')
        contactsContainer.setAttribute('id', 'contact_container')
        contactsContainer.innerHTML =`
            <fieldset id="contact_item">
                <legend><b>CONTACTS :</b> </legend>
            </fieldset>
        `
        phonebookContainer.append(contactsContainer)
    }

    renderContactsItem(phonebookContainerId, dataContacts) {
        const phonebookContainer = document.getElementById(phonebookContainerId);
        const contactsItem = document.createElement('div');
        contactsItem.classList.add('contact_item');
        contactsItem.innerHTML =`
        <h3 type="text" class="about_contact_name" >${dataContacts.name}</h3>
        <p type="text" class="about_contact_number">${dataContacts.phoneNumber}</p>
        <p type="text" class="about_contact_position">${dataContacts.position}</p>
        <div class="about_contact_btns">
            <button class="about_contact_change">Change</button>
            <button class="about_contact_info">Info</button>
            <button class="about_contact_remove">Remove</button>
        </div>
        `
        const contactContainer = document.getElementById('contact_item')
        contactContainer.append(contactsItem)
    }

}
