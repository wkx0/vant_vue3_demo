import {Button, List, Cell, CellGroup, Row, Col, NavBar, Field, Form, Icon, Grid, GridItem,Popover,Overlay  } from 'vant';

export function vant(app) {
  app.use(Button);
  app.use(Row)
  app.use(Col)
  app.use(List)
  app.use(Cell);
  app.use(Icon);
  app.use(Field);
  app.use(Form);
  app.use(NavBar);
  app.use(Grid);
  app.use(Popover);
  app.use(Overlay);
  app.use(GridItem);
  app.use(CellGroup);
}

