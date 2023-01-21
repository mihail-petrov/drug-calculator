class DropdownComponent extends HTMLElement {

    constructor() {

        super();
        console.log(this.collection);
    }

    static get observedAttributes() {
        return ['collection '];
    }

    attributeChangedCallback(property, oldValue, newValue) {

        console.log(property);
        console.log(oldValue);
        console.log(newValue);

    }

    testCLick() {
        console.log("Test Mest");
    }

    renderDropdown(collection) {

        const dropDownCOllectionTemplate = [];
        for(const element of collection) {
            dropDownCOllectionTemplate.push(`
                <div 
                    class="dropdown-list--element">

                    <div class="icon"></div>
                    <div class="list-element">
                        <div class="list-key">${element.title}</div>
                        <div class="list-value">${element.activeSubstance}</div>
                    </div>
                </div>
            `);
        }

        return dropDownCOllectionTemplate.join('');

    }

    template() {
        return `
        <div style="position: relative">
            <input  id="input-drug-supliment" 
                    class="input" type="text" 
                    style="position: relative">

            <i 
                style="position: absolute;right: 12px;top: 9px;" 
                class="fa-regular fa-circle-xmark">
            </i>
                    
            <div    id="dropdown-placeholder" 
                    class="dropdown-list" 
                    style="position: absolute; width: 90%;">
            </div>
        </div>
        `;
    }

    connectedCallback() {

        this.innerHTML = this.template();

        const dropdownInput         = document.getElementById("input-drug-supliment");
        const dropdownPlaceholder   = document.getElementById("dropdown-placeholder"); 

        dropdownPlaceholder.style.display = "none";
        
        dropdownInput.addEventListener('keyup', (e) => {

            const dropDownCOllection = [];
        
            for(let i = 0; i < drugCollection.length; i++) {
                
                const element = drugCollection[i];
                if((element.title.toLowerCase()).includes(dropdownInput.value)) {
                    dropDownCOllection.push(element);
                }
            }

            if(dropDownCOllection.length > 0) {
                dropdownPlaceholder.innerHTML       = this.renderDropdown(dropDownCOllection);
                dropdownPlaceholder.style.display   = "block";
            }        

            if(dropdownInput.value == 0) {
                dropdownPlaceholder.style.display   = "none";
            }
        });
    }
}

window.customElements.define('dropdown-component', DropdownComponent);