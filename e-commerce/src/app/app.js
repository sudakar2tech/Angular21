"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const accordion_1 = require("@ng-bootstrap/ng-bootstrap/accordion");
@(0, core_1.Component)({
    selector: 'app-root',
    imports: [router_1.RouterOutlet, accordion_1.NgbAccordionButton,
        accordion_1.NgbAccordionDirective,
        accordion_1.NgbAccordionItem,
        accordion_1.NgbAccordionHeader,
        accordion_1.NgbAccordionToggle,
        accordion_1.NgbAccordionBody,
        accordion_1.NgbAccordionCollapse],
    templateUrl: './app.html',
    styleUrl: './app.sass'
})
class App {
    title = (0, core_1.signal)('e-commerce');
}
exports.App = App;
