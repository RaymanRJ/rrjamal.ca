import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import './projects.css'

class Projects extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    };

    getProjectCard(project){
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>
                        {project.description}
                    </Card.Text>
                    <Card.Link href={project.html_url} target="_blank">Visit GitHub</Card.Link>
                </Card.Body>
            </Card>
        )
    }

    getProjectDiv(items){
        return (
            <div className="page-background">
                <Container>
                    <Row>
                        <Col></Col>
                        <Col xs={8}>
                            {
                                items.map(item => <div>{this.getProjectCard(item)}</div>)
                            }
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        )
    };

    componentDidMount() {
        fetch("https://api.github.com/users/RaymanRJ/repos")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded:true,
                        items: result
                        .map(item => ({ 
                            id: item.id,
                            name: item.name,
                            full_name: item.full_name,
                            html_url: item.html_url,
                            description: item.description,
                            created_at: new Date(item.created_at),
                            updated_at: new Date(item.updated_at),
                            pushed_at: new Date(item.pushed_at)
                        }))
                        .sort((a, b) => b.pushed_at - a.pushed_at)
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
        if(error)
            return <div>Error: {error.message}</div>;
        else if (!isLoaded)
            return <div>Loading...</div>;
        else
            return this.getProjectDiv(items);
    };
}

export default Projects;