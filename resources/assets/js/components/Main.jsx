export default class Main extends React.Component {
    render () {
        return (
            <section className="flex flex-wrap h-screen items-center justify-center">
                <div className="text-center text-xl w-128">
                    <h1 className="font-coursive text-6xl lowercase text-purple-darkest">{ this.props.title }</h1>

                    { this.props.children }
                </div>
            </section>
        );
    }
}
