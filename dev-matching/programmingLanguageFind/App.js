import SearchInput from "./SearchInput.js";
import Suggestion from "./Suggestion.js";
import SelectedLanguage from "./SelectedLanguages.js";
import { fetchLanguages } from "./api.js";
export default function App({ $target }) {
    this.state = {
        fetchedLanguages: [],
        selectedLanguages: [],
    };
    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState,
        };
        suggestion.setState({
            selectedIndex: 0,
            items: this.state.fetchedLanguages,
        });
        selectedLanguages.setState(this.state.selectedLanguages);
    };

    const searchInput = new SearchInput({
        $target,
        initialState: "",
        onChange: async (keyword) => {
            if (keyword.length === 0) {
                this.setState({
                    fetchLanguages: [],
                });
            } else {
                const languages = await fetchLanguages(keyword);
                this.setState({
                    fetchedLanguages: languages,
                });
            }
        },
    });
    const selectedLanguages = new SelectedLanguage({
        $target,
        initialState: [],
    });
    const suggestion = new Suggestion({
        $target,
        initialState: {
            selectedIndex: 0,
            items: [],
        },
        onSelect: (language) => {
            alert(language);
            const nextSelectedLanguages = [...this.state.selectedLanguages];
            const index = nextSelectedLanguages.findIndex(
                (selectedLanguage) => selectedLanguage === language
            );
            if (index > -1) {
                nextSelectedLanguages.splice(index, 1);
            }
            nextSelectedLanguages.push(language);

            this.setState({
                ...this.state,
                selectedLanguages: nextSelectedLanguages,
            });
        },
    });
}
