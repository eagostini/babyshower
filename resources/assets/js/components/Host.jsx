export default class Host extends React.Component {
    render () {
        return (
            <div>
                <p>Please, join us at a baby shower in honor of</p>
                <h2>{ this.props.name }</h2>
            </div>
        );
    }
}
