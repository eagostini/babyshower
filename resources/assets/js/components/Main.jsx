export default class Main extends React.Component {
    render () {
        return (
            <section class="flex flex-wrap h-screen items-center justify-center">
                <div class="text-center w-64">
                    <h1>{ this.props.title }</h1>

                    { this.props.children }
                </div>
            </section>
        );
    }
}
