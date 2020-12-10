import React, { Component } from 'react'

export default class Todo extends Component {
    
    state = {
        element: '',
        items: []
    }
    
    // onChange() : on est à l'écoute de ce qui se passe dans notre input
    // ca va changer notre element. ce qu'on ecrit, ca va le mettre dans element
    onChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
        //console.log(this.state.element);
    }

    // ce bouton va soumettre le formulaire
    onSubmit = (evt) => {
        evt.preventDefault();
        // on push l'element dans tab items qui contient tous les elements qu'on aurait pu mettre
        // on remet l'element à 0, on vide l'input
        this.setState({
            items: [...this.state.items, {element: this.state.element}],
            element: ''
        })
    }

    deleteItem = (index) => {
        //console.log(index);
        const arr = this.state.items;
        //splice peut servir à supprimer un elt d'un tableau : on enlève '1' elt à partir de 'index'
        arr.splice(index, 1);
        this.setState({
            items: arr
        })
    }

    // retourner nos elements pour les afficher
    renderTodo = () => {
        return this.state.items.map((item, index) => {
            return (
                <div className="card mb-3" key={index}>
                    <div className="card-body">
                        <h4 style={{color: '#5c97bf'}}>{item.element}
                            <i className="fas fa-times"
                            style={{cursor: 'pointer', float: 'right', color: '#f03434'}}
                            onClick={()=> this.deleteItem(index)}
                            ></i>
                        </h4>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="card my-3">
                    <div className="card-header">To-Do List</div>
                    <div className="card-body">

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="element">Choses à faire</label>
                                <input type="text" 
                                className="form-control form-control-lg"   
                                name="element"
                                onChange={this.onChange}
                                value={this.state.element}
                                />

                            </div>

                            <button className="btn btn-primary btn-block">
                                Ajouter une chose à faire !
                            </button>
                        </form>

                    </div>

                </div>
                {this.renderTodo()}
            </React.Fragment>
        )
    }
}
