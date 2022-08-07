import { Button, List, Cell, CellGroup,Row ,NavBar,Field,Form} from 'vant';

export function vant(app) {
    app.use(Button);
    app.use(Row)
    app.use(List)
    app.use(Cell);
    app.use(Field);
    app.use(Form);
    app.use(NavBar);
    app.use(CellGroup);
}

