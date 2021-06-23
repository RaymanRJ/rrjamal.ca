import React from 'react'

class Projects extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }

    componentDidMount() {
        fetch("https://api.github.com/users/RaymanRJ/repos")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded:true,
                        items: result.map(result => result.id)
                    });
                    console.log(this.state);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if(error){
            return <div>Error: {error.message}</div>;
        }
        else if (!isLoaded){
            console.log("Not loaded");
            return <div>Loading...</div>;
        } else{
            console.log(items);
            return <ul>
                {items}
            </ul>
        }
    };
}

export default Projects;