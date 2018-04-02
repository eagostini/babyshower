export default class Host extends React.Component {
    render () {
        return (
            <div>
                <p className="m-8">Please, join us at a baby shower in honor of</p>
                <h2 className="text-5xl text-purple-darkest">{ this.props.name }</h2>
            </div>
        );
    }
}
