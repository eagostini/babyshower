import Footer from './Footer.jsx';
import Host from './Host.jsx';
import Information from './Information.jsx';
import Main from './Main.jsx';

export default class App extends React.Component {
    render () {
        return (
            <Main title="Oh Baby!">
                <Host name="Pamella Agostini" />
                <Information />
                <Footer>
                    Gifts registered at <a className="text-green" href="https://www.amazon.com/baby-reg/pamella-agostini-june-2018-auckland/34AUTU90EHB5C" target="_blank">Amazon.com</a>
                </Footer>
            </Main>
        );
    }
}
