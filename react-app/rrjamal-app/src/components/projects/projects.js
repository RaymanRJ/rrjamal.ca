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
                        items: result.map(item => ({ 
                            id: item.id,
                            name: item.name,
                            full_name: item.full_name,
                            html_url: item.html_url,
                            description: item.description,
                            url: item.url,
                            created_at: item.created_at,
                            updated_at: item.updated_at
                        }))
                    });
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
            return <ul>
                {items.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        }
    };
}

export default Projects;