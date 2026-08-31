"use strict";
(self["webpackChunkivprog"] = self["webpackChunkivprog"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _home_lucas_Documentos_ufc_semestre_10_tcc_VProgForms_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _enums_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums/types.enum */ 3351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _features_logs_services_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/logs/services/log.service */ 1703);
/* harmony import */ var _features_logs_services_log_export_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/logs/services/log-export.service */ 189);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_variable_variable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/variable/variable.component */ 1914);
/* harmony import */ var _components_write_write_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/write/write.component */ 52);
/* harmony import */ var _components_operator_operator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/operator/operator.component */ 5307);
/* harmony import */ var _components_conditional_conditional_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/conditional/conditional.component */ 3769);
/* harmony import */ var _components_for_for_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/for/for.component */ 4928);
/* harmony import */ var _components_command_button_command_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/command-button/command-button.component */ 5888);
/* harmony import */ var _components_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/terminal/terminal.component */ 2933);















const _c0 = ["input"];

function AppComponent_div_73_app_variable_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-variable", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("remove", function AppComponent_div_73_app_variable_1_Template_app_variable_remove_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r8.removeComponent($event);
    })("change", function AppComponent_div_73_app_variable_1_Template_app_variable_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r10.setStorage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const i_r2 = ctx_r11.index;
    const component_r1 = ctx_r11.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("index", i_r2)("variable", component_r1.value)("components", ctx_r3.components)("variables", ctx_r3.getVariables());
  }
}

function AppComponent_div_73_app_write_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-write", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("remove", function AppComponent_div_73_app_write_2_Template_app_write_remove_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r12.removeComponent($event);
    })("change", function AppComponent_div_73_app_write_2_Template_app_write_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r14.setStorage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const i_r2 = ctx_r15.index;
    const component_r1 = ctx_r15.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("index", i_r2)("writer", component_r1.value)("components", ctx_r4.components)("variables", ctx_r4.getVariables());
  }
}

function AppComponent_div_73_app_operator_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-operator", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("remove", function AppComponent_div_73_app_operator_3_Template_app_operator_remove_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r16.removeComponent($event);
    })("change", function AppComponent_div_73_app_operator_3_Template_app_operator_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r18.setStorage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const i_r2 = ctx_r19.index;
    const component_r1 = ctx_r19.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("index", i_r2)("operator", component_r1.value)("components", ctx_r5.components)("variables", ctx_r5.getVariables());
  }
}

function AppComponent_div_73_app_conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-conditional", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("remove", function AppComponent_div_73_app_conditional_4_Template_app_conditional_remove_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r20.removeComponent($event);
    })("change", function AppComponent_div_73_app_conditional_4_Template_app_conditional_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r22.setStorage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const i_r2 = ctx_r23.index;
    const component_r1 = ctx_r23.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("index", i_r2)("conditional", component_r1.value)("components", ctx_r6.components)("variables", ctx_r6.getVariables());
  }
}

function AppComponent_div_73_app_for_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-for", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("remove", function AppComponent_div_73_app_for_5_Template_app_for_remove_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r24.removeComponent($event);
    })("change", function AppComponent_div_73_app_for_5_Template_app_for_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r26.setStorage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const i_r2 = ctx_r27.index;
    const component_r1 = ctx_r27.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("index", i_r2)("for", component_r1.value)("components", ctx_r7.components)("variables", ctx_r7.getVariables());
  }
}

function AppComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, AppComponent_div_73_app_variable_1_Template, 1, 4, "app-variable", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, AppComponent_div_73_app_write_2_Template, 1, 4, "app-write", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, AppComponent_div_73_app_operator_3_Template, 1, 4, "app-operator", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, AppComponent_div_73_app_conditional_4_Template, 1, 4, "app-conditional", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, AppComponent_div_73_app_for_5_Template, 1, 4, "app-for", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const component_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.isVariable(component_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.isWriter(component_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.isOperator(component_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.isConditional(component_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.isFor(component_r1));
  }
}

class AppComponent {
  constructor(translate, logService, logExportService) {
    var _this = this;

    this.translate = translate;
    this.logService = logService;
    this.logExportService = logExportService;
    this.title = 'ivprog';
    this.isMenuCollapsed = true;
    this.pressedAlt = false;
    this.components = [];
    this.isRunning = false;
    this.isMonitoring = false;
    this.showConsentModal = false;
    this.isRecordingLog = false;
    this.isDownloadReady = false;
    this.downloadableLog = null;
    this.executionAlertMessage = '';

    this.onConsentCancelled = () => {
      this.showConsentModal = false;
      setTimeout(() => {
        var _a;

        (_a = document.getElementById('btn-gravar-atividade')) === null || _a === void 0 ? void 0 : _a.focus();
      }, 100);
    };

    this.onConsentAccepted = /*#__PURE__*/(0,_home_lucas_Documentos_ufc_semestre_10_tcc_VProgForms_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.showConsentModal = false;
      localStorage.setItem('consentimento_coleta', 'true');
      yield _this.handleMonitoring();
    });
  }

  ngOnInit() {
    let defaultLang = localStorage.getItem("defaultLang");

    if (!defaultLang || defaultLang == null || defaultLang == "") {
      defaultLang = "pt";
    }

    this.translate.addLangs(['pt', 'en']);
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);
    const storageComponents = localStorage.getItem("components");

    if (storageComponents) {
      this.components = JSON.parse(storageComponents);
    }

    this.getMonitoringInStorage();
  }

  changeLanguage(language) {
    localStorage.setItem("defaultLang", language);
    this.translate.use(language);
  }

  get currentLanguage() {
    return this.translate.currentLang || this.translate.defaultLang;
  }

  getVariables() {
    return this.components ? this.components.filter(c => c.type == _enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.VARIABLE) : [];
  }

  getWriters() {
    return this.components ? this.components.filter(c => c.type == _enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.WRITER) : [];
  }

  getOperators() {
    return this.components ? this.components.filter(c => c.type == _enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.OPERATOR) : [];
  }

  getConditionals() {
    return this.components ? this.components.filter(c => c.type == _enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.CONDITIONAL) : [];
  }

  getFor() {
    return this.components ? this.components.filter(c => c.type == _enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.FOR_CODITIONAL) : [];
  }

  isVariable(component) {
    return component.type == _enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.VARIABLE;
  }

  isWriter(component) {
    return component.type == _enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.WRITER;
  }

  isOperator(component) {
    return component.type == _enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.OPERATOR;
  }

  isConditional(component) {
    return component.type == _enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.CONDITIONAL;
  }

  isFor(component) {
    return component.type == _enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.FOR_CODITIONAL;
  }

  removeComponent(index) {
    this.components.splice(index, 1);
    this.setStorage();
  }

  clear() {
    this.components = [];
    this.setStorage();
  }

  setStorage() {
    localStorage.setItem("components", JSON.stringify(this.components));
  }

  setMonitoringInStorage() {
    var _a;

    localStorage.setItem("isMonitoring", this.isMonitoring.toString());
    localStorage.setItem("currentLogId", ((_a = this.currentLogId) === null || _a === void 0 ? void 0 : _a.toString()) || "");
  }

  deleteMonitoring() {
    localStorage.removeItem("isMonitoring");
    localStorage.removeItem("currentLogId");
  }

  getMonitoringInStorage() {
    const isMonitoringSession = localStorage.getItem("isMonitoring") === "true";

    if (isMonitoringSession) {
      this.isMonitoring = true;
      this.currentLogId = parseInt(localStorage.getItem("currentLogId") || "0");
    }
  }

  validateComponents(components) {
    var _a, _b;

    if (!components) return true;

    for (const c of components) {
      if (c.type === _enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.CONDITIONAL) {
        if (!c.value || !c.value.conditionals || c.value.conditionals.length === 0) {
          return false;
        }

        for (const op of c.value.conditionals) {
          if (!op.type || op.value === '') {
            return false;
          }
        }

        if (!this.validateComponents((_a = c.value.condition) === null || _a === void 0 ? void 0 : _a.components) || !this.validateComponents((_b = c.value.nocondition) === null || _b === void 0 ? void 0 : _b.components)) {
          return false;
        }
      } else if (c.type === _enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.FOR_CODITIONAL) {
        if (!this.validateComponents(c.value.components)) {
          return false;
        }
      }
    }

    return true;
  }

  runCommands(components) {
    // TODO: Vamos executar isso toda vez que o usuário editar o programa e guardar em algum canto
    const currentLang = "pt";
    let programComands = ""; // Only variables first

    components.filter(c => c.type == _enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.VARIABLE).forEach(c => {
      switch (c.value.type) {
        case "INTEGER":
          programComands += `${currentLang == 'pt' ? 'inteiro' : 'int'} ${c.value.name} <- ${c.value.value} \n`;
          break;

        case "DOUBLE":
          programComands += `${currentLang == 'pt' ? 'real' : 'real'} ${c.value.name} <- ${c.value.value} \n`;
          break;

        case "BOOLEAN":
          programComands += `${currentLang == 'pt' ? 'logico' : 'bool'} ${c.value.name} <- ${c.value.value} \n`;
          break;

        case "STRING":
          programComands += `${currentLang == 'pt' ? 'cadeia' : 'string'} ${c.value.name} <- "${c.value.value}" \n`;
          break;

        default:
          break;
      }
    }); // Other components except variable types

    components.filter(c => c.type != _enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.VARIABLE).forEach(c => {
      if (c.type == _enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.WRITER) {
        if (c.value.type == _enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.VARIABLE) {
          programComands += `${currentLang == 'pt' ? 'escreva' : 'write'}(${c.value.value}) \n`;
        } else {
          programComands += `${currentLang == 'pt' ? 'escreva' : 'write'}("${c.value.value}") \n`;
        }
      }

      if (c.type == _enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.OPERATOR) {
        programComands += `${c.value.reference} <- ${c.value.value} \n`;
      }

      if (c.type == _enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.CONDITIONAL) {
        programComands += `${currentLang == 'pt' ? 'se' : 'id'} ( ${c.value.condition.value} ) { \n`;
        programComands += this.runCommands(c.value.condition.components);
        programComands += `} ${currentLang == 'pt' ? 'senao' : 'else'} { \n`;
        programComands += this.runCommands(c.value.nocondition.components);
        programComands += `} \n`;
      }

      if (c.type == _enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.FOR_CODITIONAL) {
        programComands += `${currentLang == 'pt' ? 'repita_para' : 'repeat_for'} ${c.value.variable} ${currentLang == 'pt' ? 'de' : 'from'} ${c.value.startValue} ${currentLang == 'pt' ? 'ate' : 'to'} ${c.value.finishValue} ${currentLang == 'pt' ? 'passo' : 'pass'} ${c.value.incrementType}${c.value.incrementValue} { \n`;
        programComands += this.runCommands(c.value.components);
        programComands += `} \n`;
      }
    });
    return programComands;
  }

  run() {
    this.executionAlertMessage = '';
    const isValid = this.validateComponents(this.components);

    if (!isValid) {
      const msg = this.translate.currentLang === 'en' ? "Incomplete conditional structure. Please check the blocks before running." : "Estrutura de decisão incompleta. Verifique os blocos antes de executar.";
      this.executionAlertMessage = msg;
      setTimeout(() => {
        const alertElement = document.getElementById("execution-alert");
        if (alertElement) alertElement.focus();
      }, 100);
      return;
    }

    const currentLang = "pt";
    let programComands = this.runCommands(this.components);
    let programSintaxPt = `
    programa { 
      funcao vazio inicio () { 
        ${programComands}
      } 
    }`;
    let programSintaxEn = `
    program { 
      function void main () { 
        ${programComands}
      } 
    }`;
    let programSintax = currentLang == 'pt' ? programSintaxPt : programSintaxEn; // Exemplo de uso
    // programSintax = `programa {
    //   funcao inicio () {
    //     inteiro a <- 0
    //     para a de 0 ate 10 {
    //       se (a%2 == 0) {
    //         escreva("eh par: "+a)
    //       }
    //     }
    //   }
    // }
    // `;
    // programSintax = `programa {
    //   funcao inicio () {
    //     inteiro a <- 0
    //     inteiro b <- 1
    //     inteiro c <- 2
    //     a <- b + c
    //     escreva("aqui: " + a)
    //   }
    // }
    // `;

    console.log(programSintax);
    this.isRunning = true;
    let executionOutput = "";

    const captureOutput = valor => {
      executionOutput += valor + "\n";
      this.terminalOutput(valor);
    };

    try {
      this.clearTerminal();
      vcat.LocalizedStrings.service.setLang("pt");
      const ast = vcat.SemanticAnalyser.analyseFromSource(programSintax);
      const proc = new vcat.IVProgProcessor(ast); // Registrando um objeto que fornece o minimo necessário para o processador
      // Vê: src/io/ouput.js

      proc.registerOutput({
        sendOutput: captureOutput
      }); // IVProgProcessor.interpretAST é uma função assíncrona
      // Ela devolve o estado final do programa (valores finais das variáveis declaradas dentro da função "inicio" ou no escopo global)
      // A classe Store em src/processor/store/store.ts descreve o parametro mas no contexto atual ele é totalmente irrelevante

      proc.interpretAST().then(_finalProgramState => {
        console.log("Programa executado com sucesso!");
        this.registrarExecucaoLog(programSintax, executionOutput);
      }).catch(err => {
        executionOutput += "Erro de execução: " + err + "\n";
        this.registrarExecucaoLog(programSintax, executionOutput);
      });
    } catch (error) {
      // Caso haja erro de sintaxe ou semântico, antes ou durante a interpretação do código uma exceção será lançada
      // Todo objeto error derivado dos erros citados acima possuem esses campos definidos
      // Adicionei a pedido da ultima pessoa que trabalho com essa integração da interface acessível
      // Caso o objeto error nao possua essas propriedades, algo bastante inexperado aconteceu e deve indicar problema interno 
      // Vê: src/ast/error/syntaxError.js, src/processor/error/runtimeError.js, src/processor/error/semanticError.js e seus respectivos factories
      // NOTA: Em alguns casos a informação de linha e coluna podem nao estar disponivel
      // id representa o identificador unico do erro, linha e coluna onde no codigo textual ocorreu o problema
      if (error.id && error.context) console.error(error.id, error.context.line, error.context.column);else console.error(error);
      executionOutput += error.message + "\n";
      this.terminalOutput(error.message);
      this.registrarExecucaoLog(programSintax, executionOutput); // a linha e coluna foi a estrategia pensada para poder associar o erro com o elemento visual que o gerou
      // uma vez que seria possivel associar seções do texto com o elemento que o gerou
    }
  }

  terminalOutput(valor) {
    setTimeout(() => {
      let terminalElement = document.getElementById("terminalOutput");
      let textTerminal = document.getElementById("textTerminal");

      if (terminalElement && textTerminal) {
        let terminalContent = terminalElement.innerHTML;
        let stringValue = valor === 0 || valor === '0' ? '0 ' : String(valor);
        terminalContent += `<p>${stringValue}</p>`;
        terminalElement.innerHTML = terminalContent;
        textTerminal.focus();
      }
    }, 200);
  }

  clearTerminal() {
    setTimeout(() => {
      let terminalElement = document.getElementById("terminalOutput");

      if (terminalElement) {
        terminalElement.innerHTML = "";
      }
    }, 200);
  }

  registrarExecucaoLog(codigo, saida) {
    if (this.isMonitoring && this.currentLogId) {
      const execucao = {
        id: crypto.randomUUID(),
        timestamp: new Date(),
        codigo: codigo,
        saida: saida
      };
      this.logService.adicionarExecucao(this.currentLogId, execucao);
    }
  }

  startMonitoring() {
    var _this2 = this;

    return (0,_home_lucas_Documentos_ufc_semestre_10_tcc_VProgForms_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const hasConsent = localStorage.getItem('consentimento_coleta');

      if (hasConsent !== 'true') {
        _this2.clear(); // Limpar terminal histórico anterior (opcionalmente apenas clear, já limpa e zera os logs)


        _this2.showConsentModal = true;
        setTimeout(() => {
          var _a;

          (_a = document.getElementById('title-terminal')) === null || _a === void 0 ? void 0 : _a.focus();
        }, 100);
        return;
      }

      _this2.isMonitoring = true;
      _this2.isRecordingLog = true;
      setTimeout(() => {
        var _a;

        (_a = document.getElementById('log-recording-message')) === null || _a === void 0 ? void 0 : _a.focus();
      }, 100);
      const id = yield _this2.logService.adicionarLog({
        dataHoraInicio: new Date(),
        dataHoraFim: null,
        execucoes: []
      });
      _this2.currentLogId = id;

      _this2.setMonitoringInStorage();

      setTimeout(() => {
        var _a;

        (_a = document.getElementById('btn-gravar-atividade')) === null || _a === void 0 ? void 0 : _a.focus();
      }, 3500);
    })();
  }

  stopMonitoring() {
    var _this3 = this;

    return (0,_home_lucas_Documentos_ufc_semestre_10_tcc_VProgForms_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.isMonitoring = false;
      _this3.isRecordingLog = false;

      if (_this3.currentLogId) {
        yield _this3.logService.atualizarLog(_this3.currentLogId, {
          dataHoraFim: new Date()
        });
        const log = yield _this3.logService.exportLog(_this3.currentLogId);
        _this3.downloadableLog = log;
        _this3.isDownloadReady = true;
        setTimeout(() => {
          var _a;

          (_a = document.getElementById('btn-download-log')) === null || _a === void 0 ? void 0 : _a.focus();
        }, 100);
        _this3.currentLogId = undefined;

        _this3.deleteMonitoring();
      }
    })();
  }

  downloadLog() {
    if (this.downloadableLog) {
      this.logExportService.exportLogTxt(this.downloadableLog);
    }

    this.isDownloadReady = false;
    this.downloadableLog = null;
    setTimeout(() => {
      var _a;

      (_a = document.getElementById('title-terminal')) === null || _a === void 0 ? void 0 : _a.focus();
    }, 100);
  }

  handleMonitoring() {
    var _this4 = this;

    return (0,_home_lucas_Documentos_ufc_semestre_10_tcc_VProgForms_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.isMonitoring) {
        yield _this4.startMonitoring();
      } else {
        yield _this4.stopMonitoring();
      }
    })();
  }

  goToComands() {
    var _a;

    (_a = document.getElementById('comands')) === null || _a === void 0 ? void 0 : _a.focus();
  }

  goToStart() {
    var _a;

    (_a = document.getElementById('area-comandos')) === null || _a === void 0 ? void 0 : _a.focus();
  }

  goToGravarAtividade() {
    var _a;

    (_a = document.getElementById('btn-gravar-atividade')) === null || _a === void 0 ? void 0 : _a.focus();
  }

  goToExecut() {
    this.run();
  }

  onKeyDown(event) {
    if (event.altKey && event.code == "KeyI") {
      this.goToStart();
      this.pressedAlt = false;
    }

    if (event.altKey && event.code == "KeyC") {
      this.goToComands();
      this.pressedAlt = false;
    }

    if (event.altKey && event.code == "KeyG") {
      this.goToGravarAtividade();
      this.pressedAlt = false;
    }

    if (event.altKey && event.code == "KeyE") {
      this.goToExecut();
      this.pressedAlt = false;
    }
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_features_logs_services_log_service__WEBPACK_IMPORTED_MODULE_2__.LogService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_features_logs_services_log_export_service__WEBPACK_IMPORTED_MODULE_3__.LogExportService));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  viewQuery: function AppComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.inputs = _t);
    }
  },
  hostBindings: function AppComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keydown", function AppComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveWindow"]);
    }
  },
  decls: 109,
  vars: 95,
  consts: [[1, "app-main"], ["href", "#area-comandos", 1, "visually-hidden-focusable"], ["href", "#btn-gravar-atividade", 1, "visually-hidden-focusable"], ["href", "#btn-dropdown-comandos", 1, "visually-hidden-focusable"], [1, "app-container", "d-flex", "justify-content-center"], [1, "back-blue"], [1, "d-flex", "align-items-center", "py-4", "px-4"], [1, "navbar", "navbar-expand-xl", "navbar-dark"], ["type", "button", "aria-controls", "navbarNav", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav"], [1, "nav-item"], ["accesskey", "ALT + I", "href", "#area-comandos", 1, "nav-link", 3, "title", "click", "keyup.space"], [1, "box-link"], ["aria-hidden", "true"], ["accesskey", "ALT + G", "href", "#btn-gravar-atividade", 1, "nav-link", 3, "title", "click", "keyup.space"], ["accesskey", "ALT + C", "href", "#btn-dropdown-comandos", 1, "nav-link", 3, "title", "click", "keyup.space"], [1, "d-flex", "ms-auto", "align-items-center", "gap-2", "gap-md-3"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownLanguage", "ngbDropdownToggle", "", 1, "btn", "btn-outline-light", "d-flex", "align-items-center", "gap-2", 3, "title"], ["aria-hidden", "true", 1, "bi", "bi-globe"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownLanguage"], ["tabindex", "0", 1, "dropdown-item", 3, "click"], ["src", "../assets/images/logo_VprogForms.png", 1, "logo-ivprog"], ["id", "area-comandos-terminal", 1, "d-flex", "flex-column"], ["id", "area-comandos", "role", "region", "tabindex", "-1"], [1, "col-12", "area-comandos-wrapper"], [1, "p-1"], ["id", "inicio"], [1, "col-12", "pt-1", "pb-4", "px-4", 2, "text-align", "right"], [1, "area-terminal-comandos-comandos", "px-4", "py-1"], [4, "ngFor", "ngForOf"], ["id", "botoes", 1, "d-flex", "flex-wrap", "pt-4", "gap-2", "justify-content-end"], ["id", "btn-gravar-atividade", 1, "btn", "btn-sm", "p-3", 3, "ngClass", "title", "click"], [1, "bi", 3, "ngClass"], [3, "components", "variables", "change"], ["id", "execution-alert", "aria-live", "assertive", "tabindex", "-1", 1, "sr-only"], ["id", "runCodeButton", "type", "button", 1, "btn", "btn-success", "p-3", 3, "click"], [1, "bi", "bi-play-fill", "mt-3", "space-icon"], ["id", "cleanCommands", "type", "button", 1, "btn", "btn-danger", "p-3", 3, "click"], [1, "bi", "bi-trash-fill", "space-icon"], [1, "col-12"], [3, "isRunning", "showConsent", "isRecordingLog", "isDownloadReady", "acceptConsent", "cancelConsent", "downloadAction"], [1, "d-flex", "flex-column", "flex-md-row", "justify-content-start", "align-items-center", "text-center", "text-md-start"], ["src", "../assets/images/logo_lumia.png", 1, "logo-lumia", "mb-3", "mb-md-0"], [1, "vr", "d-none", "d-md-block", "mx-4", "my-3"], [1, "footer-copy-text", "d-flex", "flex-column", "mb-3", "mb-md-0"], [1, "ms-md-auto", "mt-2", "mt-md-0"], [3, "index", "variable", "components", "variables", "remove", "change", 4, "ngIf"], [3, "index", "writer", "components", "variables", "remove", "change", 4, "ngIf"], [3, "index", "operator", "components", "variables", "remove", "change", 4, "ngIf"], [3, "index", "conditional", "components", "variables", "remove", "change", 4, "ngIf"], [3, "index", "for", "components", "variables", "remove", "change", 4, "ngIf"], [3, "index", "variable", "components", "variables", "remove", "change"], [3, "index", "writer", "components", "variables", "remove", "change"], [3, "index", "operator", "components", "variables", "remove", "change"], [3, "index", "conditional", "components", "variables", "remove", "change"], [3, "index", "for", "components", "variables", "remove", "change"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "nav");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Saltar para \u00C1rea de Comandos");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Saltar para Gravar Atividade");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Saltar para Lista de Comandos");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "header", 6)(12, "nav", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_Template_button_click_14_listener() {
        return ctx.isMenuCollapsed = !ctx.isMenuCollapsed;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 10)(18, "ul", 11)(19, "li", 12)(20, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_Template_a_click_20_listener() {
        return ctx.goToStart();
      })("keyup.space", function AppComponent_Template_a_keyup_space_20_listener() {
        return ctx.goToStart();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](26, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "li", 12)(28, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_Template_a_click_28_listener() {
        return ctx.goToGravarAtividade();
      })("keyup.space", function AppComponent_Template_a_keyup_space_28_listener() {
        return ctx.goToGravarAtividade();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](29, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "li", 12)(36, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_Template_a_click_36_listener() {
        return ctx.goToComands();
      })("keyup.space", function AppComponent_Template_a_keyup_space_36_listener() {
        return ctx.goToComands();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](42, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "div", 18)(44, "div", 19)(45, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](46, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](47, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](48, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](51, "uppercase");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "div", 22)(53, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_Template_button_click_53_listener() {
        return ctx.changeLanguage("pt");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](55, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_Template_button_click_56_listener() {
        return ctx.changeLanguage("en");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](58, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](59, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](60, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "div", 25)(62, "section", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](63, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "div", 27)(65, "fieldset")(66, "legend", 28)(67, "h2", 29)(68, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](69);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](70, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "div", 30)(72, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](73, AppComponent_div_73_Template, 6, 5, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "div", 33)(75, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_Template_button_click_75_listener() {
        return ctx.handleMonitoring();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](76, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](77, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](78, "i", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](79);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](80, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](81, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "app-command-button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function AppComponent_Template_app_command_button_change_82_listener() {
        return ctx.setStorage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](83, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](84);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](85, "button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_Template_button_click_85_listener() {
        return ctx.run();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](86);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](87, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](88, "span", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](89, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_Template_button_click_89_listener() {
        return ctx.clear();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](90);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](91, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](92, "span", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](93, "div", 42)(94, "app-terminal", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("acceptConsent", function AppComponent_Template_app_terminal_acceptConsent_94_listener() {
        return ctx.onConsentAccepted();
      })("cancelConsent", function AppComponent_Template_app_terminal_cancelConsent_94_listener() {
        return ctx.onConsentCancelled();
      })("downloadAction", function AppComponent_Template_app_terminal_downloadAction_94_listener() {
        return ctx.downloadLog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](95, "footer", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](96, "img", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](97, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](98, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](99, "div", 47)(100, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](101);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](102, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](103, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](104);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](105, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](106, "span", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](107);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](108, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 41, "ACCESSIBILITY.SKIP_LINKS"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](13, 43, "ACCESSIBILITY.MAIN_MENU"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("aria-expanded", !ctx.isMenuCollapsed)("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](15, 45, "ACCESSIBILITY.TOGGLE_NAVIGATION"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](21, 47, "GENERAL.MENU.ALT_I"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](26, 49, "GENERAL.MENU.START"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](29, 51, "GENERAL.MENU.ALT_G"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](34, 53, "GENERAL.MENU.MONITORING"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](37, 55, "GENERAL.MENU.ALT_C"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](42, 57, "GENERAL.MENU.COMANDS"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](47, 61, "ACCESSIBILITY.SELECT_LANGUAGE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](46, 59, "ACCESSIBILITY.SELECT_LANGUAGE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](51, 63, ctx.currentLanguage));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx.currentLanguage === "pt");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](55, 65, "GENERAL.LANGUAGES.PORTUGUESE"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx.currentLanguage === "en");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](58, 67, "GENERAL.LANGUAGES.ENGLISH"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](60, 69, "ACCESSIBILITY.LOGO_IVPROG"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](63, 71, "GENERAL.TITLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](70, 73, "GENERAL.TITLE"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.components);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx.isMonitoring ? "btn-active-recording" : "btn-ready-recording")("title", ctx.isMonitoring ? _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](76, 75, "GENERAL.MENU.ALT_M_OFF") : _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](77, 77, "GENERAL.MENU.ALT_M"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx.isMonitoring ? "bi-stop-fill" : "bi-play-fill");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.isMonitoring ? _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](80, 79, "GENERAL.MENU.MONITOR_OFF") : _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](81, 81, "GENERAL.MENU.MONITOR"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("components", ctx.components)("variables", ctx.getVariables());
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.executionAlertMessage, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](87, 83, "GENERAL.BUTTON.RUN"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](91, 85, "GENERAL.BUTTON.DELETE"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("isRunning", ctx.isRunning)("showConsent", ctx.showConsentModal)("isRecordingLog", ctx.isRecordingLog)("isDownloadReady", ctx.isDownloadReady);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](97, 87, "ACCESSIBILITY.LOGO_LUMIA"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u00A9 2026 ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](102, 89, "GENERAL.FOOTER.COPYRIGHT"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](105, 91, "GENERAL.FOOTER.ALL_RIGHTS"));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](108, 93, "GENERAL.FOOTER.VERSION"), " 1.0.0");
    }
  },
  directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbNavbar, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbCollapse, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _components_variable_variable_component__WEBPACK_IMPORTED_MODULE_4__.VariableComponent, _components_write_write_component__WEBPACK_IMPORTED_MODULE_5__.WriteComponent, _components_operator_operator_component__WEBPACK_IMPORTED_MODULE_6__.OperatorComponent, _components_conditional_conditional_component__WEBPACK_IMPORTED_MODULE_7__.ConditionalComponent, _components_for_for_component__WEBPACK_IMPORTED_MODULE_8__.ForComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _components_command_button_command_button_component__WEBPACK_IMPORTED_MODULE_9__.CommandButtonComponent, _components_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_10__.TerminalComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.UpperCasePipe],
  styles: ["fieldset[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: white;\n  position: relative;\n  display: block;\n  margin-top: 15px;\n  border-radius: 10px;\n}\n\nlegend[_ngcontent-%COMP%] {\n  width: 200px;\n  border: 3px solid silver;\n  border-radius: 10px;\n  background-color: #3d8bd4;\n  margin-left: 50px;\n  margin-top: -15px;\n}\n\nh1[_ngcontent-%COMP%]:last-child, h2[_ngcontent-%COMP%]:last-child, h3[_ngcontent-%COMP%]:last-child, h4[_ngcontent-%COMP%]:last-child, h5[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\nlegend[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: \"Segoe UI\", \"Arial\", \"Times New Roman\";\n  color: white;\n  padding-left: 10px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.space-icon[_ngcontent-%COMP%] {\n  height: 1.19em;\n  font-size: 12px;\n}\n\nh1[_ngcontent-%COMP%]:focus {\n  color: #3083ff;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 0;\n  color: #fff;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #fff;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  color: white;\n  white-space: nowrap;\n}\n\n.nav-link[_ngcontent-%COMP%]   .box-link[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #002350;\n  padding: 4px 8px;\n  border-radius: 4px;\n  margin-right: 12px;\n  font-weight: 500;\n}\n\n.area-terminal-comandos-comandos[_ngcontent-%COMP%] {\n  height: 25vh;\n  overflow-y: auto;\n  padding-right: 1.5rem;\n  padding-left: 1.5rem;\n}\n\n.btn-ready-recording[_ngcontent-%COMP%] {\n  background-color: #4B0082;\n  border-color: #4B0082;\n  color: #ffffff;\n}\n\n.btn-ready-recording[_ngcontent-%COMP%]:hover, .btn-ready-recording[_ngcontent-%COMP%]:focus {\n  background-color: #5B21B6;\n  border-color: #5B21B6;\n  color: #ffffff;\n}\n\n.btn-ready-recording[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 0.25rem rgba(75, 0, 130, 0.5);\n}\n\n.btn-active-recording[_ngcontent-%COMP%] {\n  background-color: #D35400;\n  border-color: #D35400;\n  color: #ffffff;\n}\n\n.btn-active-recording[_ngcontent-%COMP%]:hover, .btn-active-recording[_ngcontent-%COMP%]:focus {\n  background-color: #EA580C;\n  border-color: #EA580C;\n  color: #ffffff;\n}\n\n.btn-active-recording[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 0.25rem rgba(211, 84, 0, 0.5);\n}\n\n#area-comandos-terminal[_ngcontent-%COMP%] {\n  background-color: #1455AA;\n  margin: 0 24px;\n  border-radius: 12px;\n}\n\n.logo-ivprog[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 192px;\n  height: auto;\n  margin-left: 0.5rem;\n}\n\n.area-comandos-wrapper[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n  padding-right: 1.5rem;\n  padding-left: 1.5rem;\n}\n\nfooter[_ngcontent-%COMP%] {\n  padding: 8px 24px;\n  color: #fff;\n}\n\nfooter[_ngcontent-%COMP%]   .logo-lumia[_ngcontent-%COMP%] {\n  height: 64px;\n}\n\nfooter[_ngcontent-%COMP%]   .footer-copy-text[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n\nfooter[_ngcontent-%COMP%]   .footer-copy-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nfooter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n\n@media screen and (max-width: 768px) {\n  .logo-ivprog[_ngcontent-%COMP%] {\n    max-width: 128px;\n    margin-left: 0.25rem;\n  }\n\n  #area-comandos-terminal[_ngcontent-%COMP%] {\n    margin: 0 4px;\n  }\n\n  .area-comandos-wrapper[_ngcontent-%COMP%] {\n    padding-right: 0.25rem;\n    padding-left: 0.25rem;\n  }\n\n  .area-terminal-comandos-comandos[_ngcontent-%COMP%] {\n    height: 100%;\n    min-height: 156px;\n    max-height: 396px;\n    padding-right: 0.25rem;\n    padding-left: 0.25rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7Ozs7O0VBS0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxtREFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFFRTtFQUVFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUU7RUFDRSxhQUFBO0VBQ0EsK0NBQUE7QUFGSjs7QUFNQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBSEY7O0FBS0U7RUFFRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUpKOztBQU9FO0VBQ0UsYUFBQTtFQUNBLCtDQUFBO0FBTEo7O0FBU0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVNBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBTkY7O0FBU0E7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFORjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQU5GOztBQVFFO0VBQ0UsWUFBQTtBQU5KOztBQVNFO0VBQ0UsZ0JBQUE7QUFQSjs7QUFTSTtFQUNFLFNBQUE7QUFQTjs7QUFXRTtFQUNFLGdCQUFBO0FBVEo7O0FBYUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0Esb0JBQUE7RUFWRjs7RUFhQTtJQUNFLGFBQUE7RUFWRjs7RUFhQTtJQUNFLHNCQUFBO0lBQ0EscUJBQUE7RUFWRjs7RUFhQTtJQUNFLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7SUFDQSxxQkFBQTtFQVZGO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmllbGRzZXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmxlZ2VuZCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHNpbHZlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDhiZDQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbn1cclxuXHJcbmgxOmxhc3QtY2hpbGQsXHJcbmgyOmxhc3QtY2hpbGQsXHJcbmgzOmxhc3QtY2hpbGQsXHJcbmg0Omxhc3QtY2hpbGQsXHJcbmg1Omxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbmxlZ2VuZCBoMSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFwiQXJpYWxcIiwgXCJUaW1lcyBOZXcgUm9tYW5cIjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uc3BhY2UtaWNvbiB7XHJcbiAgaGVpZ2h0OiAxLjE5ZW07XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5oMTpmb2N1cyB7XHJcbiAgY29sb3I6ICMzMDgzZmY7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgLmJveC1saW5rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogIzAwMjM1MDtcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxufVxyXG5cclxuLmFyZWEtdGVybWluYWwtY29tYW5kb3MtY29tYW5kb3Mge1xyXG4gIGhlaWdodDogMjV2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxufVxyXG5cclxuLmJ0bi1yZWFkeS1yZWNvcmRpbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0QjAwODI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNEIwMDgyO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVCMjFCNjtcclxuICAgIGJvcmRlci1jb2xvcjogIzVCMjFCNjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4yNXJlbSByZ2JhKDc1LCAwLCAxMzAsIDAuNSk7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLWFjdGl2ZS1yZWNvcmRpbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEMzU0MDA7XHJcbiAgYm9yZGVyLWNvbG9yOiAjRDM1NDAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VBNTgwQztcclxuICAgIGJvcmRlci1jb2xvcjogI0VBNTgwQztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4yNXJlbSByZ2JhKDIxMSwgODQsIDAsIDAuNSk7XHJcbiAgfVxyXG59XHJcblxyXG4jYXJlYS1jb21hbmRvcy10ZXJtaW5hbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0NTVBQTtcclxuICBtYXJnaW46IDAgMjRweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG4ubG9nby1pdnByb2cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTkycHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbn1cclxuXHJcbi5hcmVhLWNvbWFuZG9zLXdyYXBwZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIHBhZGRpbmc6IDhweCAyNHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICAubG9nby1sdW1pYSB7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWNvcHktdGV4dCB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5sb2dvLWl2cHJvZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEyOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XHJcbiAgfVxyXG5cclxuICAjYXJlYS1jb21hbmRvcy10ZXJtaW5hbCB7XHJcbiAgICBtYXJnaW46IDAgNHB4O1xyXG4gIH1cclxuXHJcbiAgLmFyZWEtY29tYW5kb3Mtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xyXG4gIH1cclxuXHJcbiAgLmFyZWEtdGVybWluYWwtY29tYW5kb3MtY29tYW5kb3Mge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTU2cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzOTZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IC4yNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogLjI1cmVtO1xyXG4gIH1cclxufSJdfQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/terminal/terminal.component */ 2933);
/* harmony import */ var _components_variable_variable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/variable/variable.component */ 1914);
/* harmony import */ var _components_write_write_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/write/write.component */ 52);
/* harmony import */ var _components_operator_operator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/operator/operator.component */ 5307);
/* harmony import */ var _components_command_button_command_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/command-button/command-button.component */ 5888);
/* harmony import */ var _components_conditional_conditional_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/conditional/conditional.component */ 3769);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 8660);
/* harmony import */ var _components_for_for_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/for/for.component */ 4928);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _pipes_accessible_math_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/accessible-math.pipe */ 6584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);






















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__.TranslateHttpLoader(http);
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        _pipes_accessible_math_pipe__WEBPACK_IMPORTED_MODULE_9__.AccessibleMathPipe
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClient]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_terminal_terminal_component__WEBPACK_IMPORTED_MODULE_2__.TerminalComponent,
        _components_variable_variable_component__WEBPACK_IMPORTED_MODULE_3__.VariableComponent,
        _components_write_write_component__WEBPACK_IMPORTED_MODULE_4__.WriteComponent,
        _components_operator_operator_component__WEBPACK_IMPORTED_MODULE_5__.OperatorComponent,
        _components_command_button_command_button_component__WEBPACK_IMPORTED_MODULE_6__.CommandButtonComponent,
        _components_conditional_conditional_component__WEBPACK_IMPORTED_MODULE_7__.ConditionalComponent,
        _components_for_for_component__WEBPACK_IMPORTED_MODULE_8__.ForComponent,
        _pipes_accessible_math_pipe__WEBPACK_IMPORTED_MODULE_9__.AccessibleMathPipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetComponentScope"](_components_for_for_component__WEBPACK_IMPORTED_MODULE_8__.ForComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _components_command_button_command_button_component__WEBPACK_IMPORTED_MODULE_6__.CommandButtonComponent,
    _components_write_write_component__WEBPACK_IMPORTED_MODULE_4__.WriteComponent,
    _components_operator_operator_component__WEBPACK_IMPORTED_MODULE_5__.OperatorComponent,
    _components_conditional_conditional_component__WEBPACK_IMPORTED_MODULE_7__.ConditionalComponent,
    _components_for_for_component__WEBPACK_IMPORTED_MODULE_8__.ForComponent], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe]);


/***/ }),

/***/ 5888:
/*!***********************************************************************!*\
  !*** ./src/app/components/command-button/command-button.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandButtonComponent": () => (/* binding */ CommandButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/types.enum */ 3351);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);






function CommandButtonComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "COMANDS.TITLE"));
} }
function CommandButtonComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 11);
} }
function CommandButtonComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 11);
} }
function CommandButtonComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "COMANDS.TITLE2"));
} }
function CommandButtonComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommandButtonComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.addVariable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "COMANDS.BUTTON.NEW_VARIABLE"));
} }
class CommandButtonComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.mode = "block";
        this.text = true;
        this.text2 = false;
        this.hasVariables = true;
        this.iconComands = true;
        this.components = [];
        this.variables = [];
        this.writers = [];
        this.operators = [];
        this.conditionals = [];
        this.for = [];
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
    }
    addVariable() {
        const variable = {
            name: 'var' + this.variables.length,
            value: '0',
            type: "INTEGER"
        };
        const component = {
            type: src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.VARIABLE,
            value: variable
        };
        this.components.push(component);
        this.setStorage();
        setTimeout(() => {
            var _a;
            (_a = document.getElementById("variable-type-" + (this.components.length - 1))) === null || _a === void 0 ? void 0 : _a.focus();
        }, 100);
    }
    addWriter() {
        const writer = {
            type: '',
            value: ''
        };
        const component = {
            type: src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.WRITER,
            value: writer
        };
        this.components.push(component);
        this.setStorage();
        setTimeout(() => {
            var _a;
            (_a = document.getElementById("write-type-" + (this.components.length - 1))) === null || _a === void 0 ? void 0 : _a.focus();
        }, 100);
    }
    addOperator() {
        const operator = {
            name: '',
            value: ''
        };
        const component = {
            type: src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.OPERATOR,
            value: operator
        };
        this.components.push(component);
        this.setStorage();
        setTimeout(() => {
            var _a;
            (_a = document.getElementById("select-var-" + (this.components.length - 1))) === null || _a === void 0 ? void 0 : _a.focus();
        }, 100);
    }
    addConditional() {
        const conditional = {
            condition: {
                value: '',
                components: [],
            },
            nocondition: {
                components: [],
            },
        };
        const component = {
            type: src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.CONDITIONAL,
            value: conditional
        };
        this.components.push(component);
        this.setStorage();
        setTimeout(() => {
            var _a;
            (_a = document.getElementById("button-op-" + (this.components.length - 1))) === null || _a === void 0 ? void 0 : _a.focus();
        }, 100);
    }
    addFor() {
        const forOperator = {
            variable: '',
            startType: '',
            startValue: '',
            finishType: '',
            finishValue: '',
            incrementType: '',
            incrementValue: '',
            components: []
        };
        const component = {
            type: src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.FOR_CODITIONAL,
            value: forOperator
        };
        this.components.push(component);
        this.setStorage();
        setTimeout(() => {
            var _a;
            (_a = document.getElementById("for-select-" + (this.components.length - 1))) === null || _a === void 0 ? void 0 : _a.focus();
        }, 100);
    }
    setStorage() {
        // TODO: executa toda vez que adiciona um comando
        this.change.emit();
    }
    onKeyDown(event) {
        const activeEl = document.activeElement;
        const isInsideAnyCommandButton = (activeEl === null || activeEl === void 0 ? void 0 : activeEl.closest('app-command-button')) !== null;
        const isInsideThisCommandButton = this.elementRef.nativeElement.contains(activeEl);
        // Se o foco estiver dentro de algum command-button, apenas o command-button focado deve disparar o evento.
        // Caso contrário (foco fora), apenas o command-button raiz (mode == 'block') deve disparar.
        if (isInsideAnyCommandButton) {
            if (!isInsideThisCommandButton)
                return;
        }
        else {
            if (this.mode !== 'block')
                return;
        }
        if (event.altKey && event.code === "Digit1" && this.hasVariables) {
            event.preventDefault();
            this.addVariable();
        }
        if (event.altKey && event.code === "Digit2") {
            event.preventDefault();
            this.addOperator();
        }
        if (event.altKey && event.code === "Digit3") {
            event.preventDefault();
            this.addWriter();
        }
        if (event.altKey && event.code === "Digit4") {
            event.preventDefault();
            this.addConditional();
        }
        if (event.altKey && event.code === "Digit5") {
            event.preventDefault();
            this.addFor();
        }
    }
}
CommandButtonComponent.ɵfac = function CommandButtonComponent_Factory(t) { return new (t || CommandButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
CommandButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CommandButtonComponent, selectors: [["app-command-button"]], hostBindings: function CommandButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function CommandButtonComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { mode: "mode", text: "text", text2: "text2", hasVariables: "hasVariables", iconComands: "iconComands", title: "title", components: "components", variables: "variables", writers: "writers", operators: "operators", conditionals: "conditionals", for: "for" }, outputs: { change: "change" }, decls: 21, vars: 23, consts: [["ngbDropdown", ""], ["id", "btn-dropdown-comandos", "type", "button", "ngbDropdownToggle", "", 1, "dropdown", "btn", "btn-primary", "p-3", 3, "title"], [4, "ngIf"], ["class", "bi bi-code-slash", 4, "ngIf"], ["class", "color-black", "tabindex", "-1", 4, "ngIf"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["class", "dropdown-item", "tabindex", "0", "aria-keyshortcuts", "Alt+1", 3, "click", 4, "ngIf"], ["tabindex", "0", "aria-keyshortcuts", "Alt+2", 1, "dropdown-item", 3, "click"], ["tabindex", "0", "aria-keyshortcuts", "Alt+3", 1, "dropdown-item", 3, "click"], ["tabindex", "0", "aria-keyshortcuts", "Alt+4", 1, "dropdown-item", 3, "click"], ["tabindex", "0", "aria-keyshortcuts", "Alt+5", 1, "dropdown-item", 3, "click"], [1, "bi", "bi-code-slash"], ["tabindex", "-1", 1, "color-black"], ["tabindex", "0", "aria-keyshortcuts", "Alt+1", 1, "dropdown-item", 3, "click"]], template: function CommandButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CommandButtonComponent_span_3_Template, 3, 3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CommandButtonComponent_span_4_Template, 1, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CommandButtonComponent_span_5_Template, 1, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CommandButtonComponent_span_6_Template, 3, 3, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CommandButtonComponent_button_8_Template, 3, 3, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommandButtonComponent_Template_button_click_9_listener() { return ctx.addOperator(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommandButtonComponent_Template_button_click_12_listener() { return ctx.addWriter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommandButtonComponent_Template_button_click_15_listener() { return ctx.addConditional(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommandButtonComponent_Template_button_click_18_listener() { return ctx.addFor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("d-inline-block ", ctx.mode, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 13, ctx.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.text == true && ctx.text2 == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.text == false && ctx.iconComands == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.text == false && ctx.iconComands == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.text2 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasVariables);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 15, "COMANDS.BUTTON.MATH"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 17, "COMANDS.BUTTON.WRITE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 19, "COMANDS.BUTTON.IF"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 21, "COMANDS.BUTTON.WHILE"));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownToggle, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownMenu], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".inline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: none;\n}\n.inline[_ngcontent-%COMP%]   .bi-code-slash[_ngcontent-%COMP%]::before {\n  color: black !important;\n}\n.inline[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  color: black;\n}\n.color-black[_ngcontent-%COMP%] {\n  color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksd0NBQUE7RUFDQSxZQUFBO0FBQVI7QUFFSTtFQUNJLHVCQUFBO0FBQVI7QUFFSTtFQUNJLFlBQUE7QUFBUjtBQUlBO0VBQ0ksdUJBQUE7QUFESiIsImZpbGUiOiJjb21tYW5kLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmxpbmUge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICAgIC5iaS1jb2RlLXNsYXNoOjpiZWZvcmV7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZHJvcGRvd24tdG9nZ2xlOjphZnRlcntcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb2xvci1ibGFja3tcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ 3769:
/*!*****************************************************************!*\
  !*** ./src/app/components/conditional/conditional.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConditionalComponent": () => (/* binding */ ConditionalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _pipes_accessible_math_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/accessible-math.pipe */ 6584);
/* harmony import */ var src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/types.enum */ 3351);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _command_button_command_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../command-button/command-button.component */ 5888);
/* harmony import */ var _write_write_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../write/write.component */ 52);
/* harmony import */ var _operator_operator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operator/operator.component */ 5307);
/* harmony import */ var _for_for_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../for/for.component */ 4928);












function ConditionalComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", "conditional-cod-" + ctx_r0.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r0.commandsPlainText, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function ConditionalComponent_div_3_div_11_select_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ConditionalComponent_div_3_div_11_select_2_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15); const op_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; return op_r8.type = $event; })("change", function ConditionalComponent_div_3_div_11_select_2_Template_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15); const op_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r16.clearValue(op_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const op_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate2"]("id", "conditional-op-", ctx_r9.index, "-", op_r8.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", op_r8.type)("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 11, "GENERAL.SELECT_DATA_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 13, "GENERAL.SELECT_DATA_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 15, "GENERAL.SELECT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "VARIABLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 17, "GENERAL.VARIABLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 19, "GENERAL.VALUE"));
} }
function ConditionalComponent_div_3_div_11_select_4_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "GENERAL.NOT_VARIABLE"));
} }
function ConditionalComponent_div_3_div_11_select_4_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "GENERAL.SELECT_VARIABLE"));
} }
function ConditionalComponent_div_3_div_11_select_4_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", v_r22.value.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](v_r22.value.name);
} }
function ConditionalComponent_div_3_div_11_select_4_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ConditionalComponent_div_3_div_11_select_4_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25); const op_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; return op_r8.value = $event; })("change", function ConditionalComponent_div_3_div_11_select_4_Template_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r26.changeValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ConditionalComponent_div_3_div_11_select_4_option_3_Template, 3, 4, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ConditionalComponent_div_3_div_11_select_4_option_4_Template, 3, 4, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ConditionalComponent_div_3_div_11_select_4_option_5_Template, 2, 2, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate2"]("id", "conditional-op-", ctx_r10.index, "-", op_r8.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", op_r8.value)("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 8, "GENERAL.SELECT_VARIABLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 10, "GENERAL.SELECT_VARIABLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r10.variables.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r10.variables.length && op_r8.value == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r10.variables);
} }
function ConditionalComponent_div_3_div_11_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ConditionalComponent_div_3_div_11_input_6_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); const op_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; return op_r8.valueString = $event; })("keyup", function ConditionalComponent_div_3_div_11_input_6_Template_input_keyup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); const op_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r31.changeInputValue(op_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate2"]("id", "conditional-op-", ctx_r11.index, "-", op_r8.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", op_r8.valueString)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 6, "GENERAL.DIGIT_VALUE"))("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 8, "GENERAL.DIGIT_VALUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 10, "GENERAL.DIGIT_VALUE"));
} }
function ConditionalComponent_div_3_div_11_select_8_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "GENERAL.CONDITIONAL"));
} }
function ConditionalComponent_div_3_div_11_select_8_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ConditionalComponent_div_3_div_11_select_8_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const op_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; return op_r8.value = $event; })("change", function ConditionalComponent_div_3_div_11_select_8_Template_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const op_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r38.changeConditional(op_r8, op_r8.value, op_r8.index); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ConditionalComponent_div_3_div_11_select_8_option_3_Template, 3, 4, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "optgroup", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "optgroup", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "OU");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "nao");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "optgroup", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "<");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "==");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "!=");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, ">=");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "<=");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const op_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate2"]("id", "conditional-op-", ctx_r12.index, "-", op_r8.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", op_r8.value)("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 23, "GENERAL.SELECT_OPERATOR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 25, "GENERAL.SELECT_OPERATOR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", op_r8.value == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 27, "GENERAL.MATH"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 29, "GENERAL.LOGIC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "OU");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "nao");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](25, 31, "GENERAL.RELATIONAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "<");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "==");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "!=");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", ">=");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "<=");
} }
function ConditionalComponent_div_3_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ConditionalComponent_div_3_div_11_select_2_Template, 12, 21, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ConditionalComponent_div_3_div_11_select_4_Template, 6, 12, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ConditionalComponent_div_3_div_11_input_6_Template, 4, 12, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ConditionalComponent_div_3_div_11_select_8_Template, 38, 33, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const op_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", op_r8.type != "CONDITIONAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", op_r8.type == "VARIABLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", op_r8.type == "VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", op_r8.type == "CONDITIONAL");
} }
function ConditionalComponent_div_3_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ConditionalComponent_div_3_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r41.addConditional(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "strong", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "strong", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 1, "GENERAL.CONDITIONAL"));
} }
function ConditionalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "( ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ConditionalComponent_div_3_div_11_Template, 9, 4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ConditionalComponent_div_3_button_13_Template, 6, 3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 18)(15, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 23)(21, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "app-command-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ConditionalComponent_div_3_Template_app_command_button_change_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r43.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 26)(26, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ConditionalComponent_div_3_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r45.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 14, "GENERAL.IF"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 16, "GENERAL.OPEN_PARENTHESES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.conditional.conditionals);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.conditional.conditionals.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](19, 18, "GENERAL.CLOSE_PARENTHESES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](23, 20, "GENERAL.ELSE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mode", "inline")("title", "Adicionar comandos na condi\u00E7\u00E3o")("hasVariables", false)("components", ctx_r1.conditional.condition.components)("variables", ctx_r1.variables)("text", false)("iconComands", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](27, 22, "GENERAL.CLEAN"));
} }
function ConditionalComponent_app_command_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-command-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ConditionalComponent_app_command_button_6_Template_app_command_button_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r46.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mode", "inline")("text", false)("title", "Comandos")("components", ctx_r2.components)("variables", ctx_r2.variables);
} }
function ConditionalComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 46);
} }
function ConditionalComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 47);
} }
function ConditionalComponent_div_18_div_2_app_write_1_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-write", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("remove", function ConditionalComponent_div_18_div_2_app_write_1_Template_app_write_remove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r56.removeComponent(ctx_r56.conditional.condition.components, $event); })("change", function ConditionalComponent_div_18_div_2_app_write_1_Template_app_write_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r58.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const i_r51 = ctx_r59.index;
    const component_r50 = ctx_r59.$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("back", true)("index", i_r51)("hasToggle", false)("writer", component_r50.value)("components", ctx_r52.conditional.condition.components)("variables", ctx_r52.variables);
} }
function ConditionalComponent_div_18_div_2_app_operator_2_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-operator", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("remove", function ConditionalComponent_div_18_div_2_app_operator_2_Template_app_operator_remove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r60.removeComponent(ctx_r60.conditional.condition.components, $event); })("change", function ConditionalComponent_div_18_div_2_app_operator_2_Template_app_operator_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r61); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r62.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const i_r51 = ctx_r63.index;
    const component_r50 = ctx_r63.$implicit;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("back", true)("index", i_r51)("hasToggle", false)("operator", component_r50.value)("components", ctx_r53.conditional.condition.components)("variables", ctx_r53.variables);
} }
function ConditionalComponent_div_18_div_2_app_conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-conditional", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("remove", function ConditionalComponent_div_18_div_2_app_conditional_3_Template_app_conditional_remove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r64.removeComponent(ctx_r64.conditional.condition.components, $event); })("change", function ConditionalComponent_div_18_div_2_app_conditional_3_Template_app_conditional_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r66.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const i_r51 = ctx_r67.index;
    const component_r50 = ctx_r67.$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("back", true)("index", i_r51)("hasToggle", false)("conditional", component_r50.value)("components", ctx_r54.conditional.condition.components)("variables", ctx_r54.variables);
} }
function ConditionalComponent_div_18_div_2_app_for_4_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-for", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("remove", function ConditionalComponent_div_18_div_2_app_for_4_Template_app_for_remove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r68.removeComponent(ctx_r68.conditional.condition.components, $event); })("change", function ConditionalComponent_div_18_div_2_app_for_4_Template_app_for_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r69); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r70.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const i_r51 = ctx_r71.index;
    const component_r50 = ctx_r71.$implicit;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("back", true)("index", i_r51)("for", component_r50.value)("components", ctx_r55.conditional.condition.components)("variables", ctx_r55.variables);
} }
function ConditionalComponent_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ConditionalComponent_div_18_div_2_app_write_1_Template, 1, 6, "app-write", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ConditionalComponent_div_18_div_2_app_operator_2_Template, 1, 6, "app-operator", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ConditionalComponent_div_18_div_2_app_conditional_3_Template, 1, 6, "app-conditional", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ConditionalComponent_div_18_div_2_app_for_4_Template, 1, 5, "app-for", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const component_r50 = ctx.$implicit;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r48.isWriter(component_r50));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r48.isOperator(component_r50));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r48.isConditional(component_r50));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r48.isFor(component_r50));
} }
function ConditionalComponent_div_18_div_10_app_write_1_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-write", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("remove", function ConditionalComponent_div_18_div_10_app_write_1_Template_app_write_remove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r78.removeComponent(ctx_r78.conditional.nocondition.components, $event); })("change", function ConditionalComponent_div_18_div_10_app_write_1_Template_app_write_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r79); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r80.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const i_r73 = ctx_r81.index;
    const component_r72 = ctx_r81.$implicit;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("back", true)("index", i_r73)("hasToggle", false)("writer", component_r72.value)("components", ctx_r74.conditional.nocondition.components)("variables", ctx_r74.variables);
} }
function ConditionalComponent_div_18_div_10_app_operator_2_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-operator", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("remove", function ConditionalComponent_div_18_div_10_app_operator_2_Template_app_operator_remove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r82.removeComponent(ctx_r82.conditional.nocondition.components, $event); })("change", function ConditionalComponent_div_18_div_10_app_operator_2_Template_app_operator_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r83); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r84.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const i_r73 = ctx_r85.index;
    const component_r72 = ctx_r85.$implicit;
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("back", true)("index", i_r73)("hasToggle", false)("operator", component_r72.value)("components", ctx_r75.conditional.nocondition.components)("variables", ctx_r75.variables);
} }
function ConditionalComponent_div_18_div_10_app_conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-conditional", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("remove", function ConditionalComponent_div_18_div_10_app_conditional_3_Template_app_conditional_remove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r86.removeComponent(ctx_r86.conditional.nocondition.components, $event); })("change", function ConditionalComponent_div_18_div_10_app_conditional_3_Template_app_conditional_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r87); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r88.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const i_r73 = ctx_r89.index;
    const component_r72 = ctx_r89.$implicit;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("back", true)("index", i_r73)("hasToggle", false)("conditional", component_r72.value)("components", ctx_r76.conditional.nocondition.components)("variables", ctx_r76.variables);
} }
function ConditionalComponent_div_18_div_10_app_for_4_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-for", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("remove", function ConditionalComponent_div_18_div_10_app_for_4_Template_app_for_remove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r90.removeComponent(ctx_r90.conditional.nocondition.components, $event); })("change", function ConditionalComponent_div_18_div_10_app_for_4_Template_app_for_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r91); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r92.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const i_r73 = ctx_r93.index;
    const component_r72 = ctx_r93.$implicit;
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("back", true)("index", i_r73)("for", component_r72.value)("components", ctx_r77.conditional.nocondition.components)("variables", ctx_r77.variables);
} }
function ConditionalComponent_div_18_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ConditionalComponent_div_18_div_10_app_write_1_Template, 1, 6, "app-write", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ConditionalComponent_div_18_div_10_app_operator_2_Template, 1, 6, "app-operator", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ConditionalComponent_div_18_div_10_app_conditional_3_Template, 1, 6, "app-conditional", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ConditionalComponent_div_18_div_10_app_for_4_Template, 1, 5, "app-for", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const component_r72 = ctx.$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r49.isWriter(component_r72));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r49.isOperator(component_r72));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r49.isConditional(component_r72));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r49.isFor(component_r72));
} }
function ConditionalComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ConditionalComponent_div_18_div_2_Template, 5, 4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 51)(4, "div", 52)(5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "app-command-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ConditionalComponent_div_18_Template_app_command_button_change_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r94.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ConditionalComponent_div_18_div_10_Template, 5, 4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r5.conditional.condition.components);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 10, "GENERAL.ELSE_IF"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mode", "inline")("title", "Adicionar comandos na condi\u00E7\u00E3o")("hasVariables", false)("components", ctx_r5.conditional.nocondition.components)("variables", ctx_r5.variables)("text", false)("iconComands", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r5.conditional.nocondition.components);
} }
class ConditionalComponent {
    constructor(translate, accMath) {
        this.translate = translate;
        this.accMath = accMath;
        this.isHidden = true;
        this.text = true;
        this.back = false;
        this.hasToggle = true;
        this.components = [];
        this.iconComands = true;
        this.conditional = {
            condition: {
                value: '',
                components: [],
            },
            nocondition: {
                components: [],
            },
        };
        this.commandsPlainText = "";
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    }
    ngOnInit() {
        if (!this.conditional.conditionals) {
            this.clear();
        }
    }
    isVariable(component) {
        return component.type == src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.VARIABLE;
    }
    isWriter(component) {
        return component.type == src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.WRITER;
    }
    isOperator(component) {
        return component.type == src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.OPERATOR;
    }
    isConditional(component) {
        return component.type == src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.CONDITIONAL;
    }
    isFor(component) {
        return component.type == src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.FOR_CODITIONAL;
    }
    removeComponent(components, index) {
        components.splice(index, 1);
        this.setStorage();
    }
    getComponentVariables(components) {
        return components ? components.filter((c) => c.type == src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.VARIABLE) : [];
    }
    focusConditional(index) {
        setTimeout(() => {
            let conditionalElement = document.getElementById(`conditional-op-${this.index}-${index}`);
            if (conditionalElement) {
                conditionalElement.focus();
            }
        }, 200);
    }
    addConditional() {
        this.conditional.conditionals.push({
            index: this.conditional.conditionals.length,
            type: 'CONDITIONAL',
            value: '',
        });
        this.focusConditional(this.conditional.conditionals.length - 1);
        this.conditional.conditionals.push({
            index: this.conditional.conditionals.length,
            type: '',
            value: '',
        });
        this.setStorage();
    }
    changeInputValue(element) {
        element.value = isNaN(element.valueString) ? `"${element.valueString}"` : element.valueString;
        this.changeValue();
    }
    changeValue() {
        this.conditional.condition.value = "";
        this.conditional.conditionals.forEach((op) => {
            this.conditional.condition.value += `${op.value} `;
        });
        this.setStorage();
    }
    changeConditional(element, condition, index) {
        element.value = condition;
        this.changeValue();
        this.focusConditional(index + 1);
    }
    toggleHidden() {
        this.isHidden = !this.isHidden;
        if (!this.isHidden) {
            this.formatCommands();
            setTimeout(() => {
                var _a;
                (_a = document.getElementById("conditional-cod-" + this.index)) === null || _a === void 0 ? void 0 : _a.focus();
            }, 200);
        }
        else {
            setTimeout(() => {
                var _a;
                (_a = document.getElementById("conditional-op-" + this.index + "-0")) === null || _a === void 0 ? void 0 : _a.focus();
            }, 200);
        }
    }
    formatCommands() {
        const currentLang = this.translate.currentLang;
        const condValue = this.accMath.transform(this.conditional.condition.value);
        this.commandsPlainText = `${currentLang == 'pt' ? 'se' : 'if'} ( ${condValue} ) { <br/>`;
        this.commandsPlainText += `${this.runCommands(this.conditional.condition.components)}`;
        this.commandsPlainText += `} ${currentLang == 'pt' ? 'senao' : 'else'} { <br/>`;
        this.commandsPlainText += `${this.runCommands(this.conditional.nocondition.components)}`;
        this.commandsPlainText += `} <br/>`;
    }
    runCommands(components) {
        const currentLang = this.translate.currentLang;
        let programComands = "";
        // Other components except variable types
        components.filter((c) => c.type != src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.VARIABLE).forEach((c) => {
            if (c.type == src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.WRITER) {
                if (c.value.type == src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.VARIABLE) {
                    programComands += `&emsp; ${currentLang == 'pt' ? 'escreva' : 'write'}(${c.value.value}) <br/>`;
                }
                else {
                    programComands += `&emsp; ${currentLang == 'pt' ? 'escreva' : 'write'}("${c.value.value}") <br/>`;
                }
            }
            if (c.type == src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.OPERATOR) {
                programComands += `&emsp; ${c.value.reference} ${this.accMath.transform('<-')} ${this.accMath.transform(c.value.value)} ${this.accMath.transform(';')} <br/>`;
            }
            if (c.type == src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.CONDITIONAL) {
                programComands += `&emsp; ${currentLang == 'pt' ? 'se' : 'if'} ( ${this.accMath.transform(c.value.condition.value)} ) { <br/>`;
                programComands += `&emsp; ${this.runCommands(c.value.condition.components)}`;
                programComands += `&emsp; } ${currentLang == 'pt' ? 'senao' : 'else'} { <br/>`;
                programComands += `&emsp; ${this.runCommands(c.value.nocondition.components)}`;
                programComands += `&emsp; } <br/>`;
            }
            if (c.type == src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.FOR_CODITIONAL) {
                programComands += `&emsp; ${currentLang == 'pt' ? 'repita_para' : 'repeat_for'} ${c.value.variable} ${currentLang == 'pt' ? 'de' : 'from'} ${c.value.startValue} ${currentLang == 'pt' ? 'ate' : 'to'} ${c.value.finishValue} ${currentLang == 'pt' ? 'passo' : 'pass'} ${c.value.incrementType}${c.value.incrementValue} { <br/>`;
                programComands += `&emsp; ${this.runCommands(c.value.components)}`;
                programComands += `&emsp; } <br/>`;
            }
        });
        return programComands;
    }
    removeConditional() {
        this.remove.emit(this.index);
    }
    clear() {
        this.conditional.conditionals = [];
        this.conditional.conditionals.push({
            index: this.conditional.conditionals.length,
            type: '',
            value: '',
        });
        this.focusConditional(this.conditional.conditionals.length - 1);
        this.setStorage();
    }
    clearValue(conditional) {
        conditional.value = "";
        this.setStorage();
    }
    setStorage() {
        // TODO: executa toda vez que adiciona este comando
        this.change.emit();
    }
}
ConditionalComponent.ɵfac = function ConditionalComponent_Factory(t) { return new (t || ConditionalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_pipes_accessible_math_pipe__WEBPACK_IMPORTED_MODULE_0__.AccessibleMathPipe)); };
ConditionalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ConditionalComponent, selectors: [["app-conditional"]], inputs: { text: "text", title: "title", back: "back", index: "index", hasToggle: "hasToggle", components: "components", variables: "variables", iconComands: "iconComands", conditional: "conditional" }, outputs: { remove: "remove", change: "change" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_pipes_accessible_math_pipe__WEBPACK_IMPORTED_MODULE_0__.AccessibleMathPipe])], decls: 19, vars: 20, consts: [["id", "conditional", 1, "mb-2", "col-12", "px-1", "back", 3, "ngClass"], [1, "row", "py-2", "px-3", "content", "align-items-start"], ["class", "col-12 col-lg-9 d-flex justify-content-start align-items-center py-1", 4, "ngIf"], ["class", "d-flex flex-column col-12 col-lg-9 conditional py-1", 4, "ngIf"], [1, "col-12", "col-lg-3", "py-1"], [1, "d-flex", "justify-content-end", "align-items-center"], [3, "mode", "text", "title", "components", "variables", "change", 4, "ngIf"], [1, "btn", "btn-transparent", 3, "title", "click"], ["class", "bi bi-unlock-fill", "aria-hidden", "true", 4, "ngIf"], ["class", "bi bi-lock-fill", "aria-hidden", "true", 4, "ngIf"], [1, "btn", "btn-transparent", "text-danger", "pr-2", 3, "title", "click"], ["aria-hidden", "true"], ["class", "d-flex flex-column col-12 col-lg-12 conditional mt-2", 4, "ngIf"], [1, "col-12", "col-lg-9", "d-flex", "justify-content-start", "align-items-center", "py-1"], ["tabindex", "0", 1, "mb-0", "text-left", 3, "id"], [3, "innerHTML"], [1, "d-flex", "flex-column", "col-12", "col-lg-9", "conditional", "py-1"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2", "mb-2"], [1, "d-flex", "justify-content-center", "align-items-center", "position-relative"], ["tabindex", "0", 1, "rigth"], ["tabindex", "0", "aria-hidden", "false", 1, "sr-only"], ["class", "d-flex flex-wrap align-items-center gap-2", 4, "ngFor", "ngForOf"], ["class", "btn btn-primary more mx-1", "type", "button", 3, "click", 4, "ngIf"], [1, "d-flex", "align-items-center", "gap-1", "ms-2"], ["tabindex", "0"], [3, "mode", "title", "hasVariables", "components", "variables", "text", "iconComands", "change"], [1, "d-flex", "justify-content-center", "align-items-center", "ms-auto"], [1, "trash", 3, "title", "click"], [1, "bi", "bi-trash"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2"], [1, "cond-col"], ["class", "form-select", 3, "id", "ngModel", "title", "ngModelChange", "change", 4, "ngIf"], ["class", "form-control", "type", "text", 3, "id", "ngModel", "placeholder", "title", "ngModelChange", "keyup", 4, "ngIf"], ["class", "form-select conditional-dropdown", "tabindex", "0", 3, "id", "ngModel", "title", "ngModelChange", "change", 4, "ngIf"], [1, "form-select", 3, "id", "ngModel", "title", "ngModelChange", "change"], ["selected", "", 3, "ngValue"], [3, "ngValue"], ["disabled", "", 3, "ngValue", 4, "ngIf"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["disabled", "", 3, "ngValue"], ["type", "text", 1, "form-control", 3, "id", "ngModel", "placeholder", "title", "ngModelChange", "keyup"], ["tabindex", "0", 1, "form-select", "conditional-dropdown", 3, "id", "ngModel", "title", "ngModelChange", "change"], [3, "label"], ["type", "button", 1, "btn", "btn-primary", "more", "mx-1", 3, "click"], ["aria-hidden", "false", 1, "sr-only"], [3, "mode", "text", "title", "components", "variables", "change"], ["aria-hidden", "true", 1, "bi", "bi-unlock-fill"], ["aria-hidden", "true", 1, "bi", "bi-lock-fill"], [1, "d-flex", "flex-column", "col-12", "col-lg-12", "conditional", "mt-2"], [1, "row", "d-flex", "flex-wrap", "zindex"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-wrap", "align-items-center", "my-2"], [1, "d-flex", "justify-content-center", "align-items-center", "gap-1"], [1, "row"], [3, "back", "index", "hasToggle", "writer", "components", "variables", "remove", "change", 4, "ngIf"], [3, "back", "index", "hasToggle", "operator", "components", "variables", "remove", "change", 4, "ngIf"], [3, "back", "index", "hasToggle", "conditional", "components", "variables", "remove", "change", 4, "ngIf"], [3, "back", "index", "for", "components", "variables", "remove", "change", 4, "ngIf"], [3, "back", "index", "hasToggle", "writer", "components", "variables", "remove", "change"], [3, "back", "index", "hasToggle", "operator", "components", "variables", "remove", "change"], [3, "back", "index", "hasToggle", "conditional", "components", "variables", "remove", "change"], [3, "back", "index", "for", "components", "variables", "remove", "change"]], template: function ConditionalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ConditionalComponent_div_2_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ConditionalComponent_div_3_Template, 29, 24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ConditionalComponent_app_command_button_6_Template, 1, 5, "app-command-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ConditionalComponent_Template_button_click_7_listener() { return ctx.toggleHidden(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ConditionalComponent_span_12_Template, 1, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ConditionalComponent_span_13_Template, 1, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ConditionalComponent_Template_button_click_14_listener() { return ctx.removeConditional(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ConditionalComponent_div_18_Template, 11, 12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.back == true ? "new-back" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.hasToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", ctx.isHidden ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 14, "GENERAL.READ_CODE") : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 16, "GENERAL.READ_EDIT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", ctx.isHidden ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 10, "GENERAL.READ_CODE") : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 12, "GENERAL.READ_EDIT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 18, "GENERAL.REMOVE_COMANDS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isHidden);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _command_button_command_button_component__WEBPACK_IMPORTED_MODULE_2__.CommandButtonComponent, _write_write_component__WEBPACK_IMPORTED_MODULE_3__.WriteComponent, _operator_operator_component__WEBPACK_IMPORTED_MODULE_4__.OperatorComponent, ConditionalComponent, _for_for_component__WEBPACK_IMPORTED_MODULE_5__.ForComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: ["input[_ngcontent-%COMP%] {\n  width: 47px;\n}\n\nselect[_ngcontent-%COMP%] {\n  width: auto;\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.operator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n\ninput[_ngcontent-%COMP%] {\n  min-width: 8rem;\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n\n.cond-col[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n}\n\n.more[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.rigth[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n\n.trash[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  border: none;\n}\n\n.conditional-dropdown[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n\n[_nghost-%COMP%]   app-write[_ngcontent-%COMP%]   .write[_ngcontent-%COMP%] {\n  width: 70vw;\n}\n\n.text-left[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.zindex[_ngcontent-%COMP%] {\n  z-index: 9;\n}\n\n.new-back[_ngcontent-%COMP%] {\n  background-color: #ffb0dd;\n}\n\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: var(--bs-btn-hover-border-color);\n  outline: 0;\n  box-shadow: var(--bs-btn-focus-box-shadow);\n}\n\n@media screen and (max-width: 576px) {\n  .cond-col[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .cond-col[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .cond-col[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmRpdGlvbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFEQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFEQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGQTtFQUNJLGlCQUFBO0FBS0o7O0FBRkE7RUFDSSw2QkFBQTtFQUNBLFlBQUE7QUFLSjs7QUFGQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFLSjs7QUFGQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFEUTtFQUNJLFdBQUE7QUFJWjs7QUFBQTtFQUNJLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxVQUFBO0FBSUo7O0FBREE7RUFDSSx5QkFBQTtBQUlKOztBQUFJO0VBQ0ksOENBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7QUFHUjs7QUFDQTtFQUNJO0lBQ0ksV0FBQTtFQUVOO0VBRE07SUFDSSxXQUFBO0VBR1Y7QUFDRiIsImZpbGUiOiJjb25kaXRpb25hbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xyXG4gICAgd2lkdGg6IDQ3cHg7XHJcbn1cclxuXHJcbnNlbGVjdHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5vcGVyYXRvcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbmlucHV0e1xyXG4gICAgbWluLXdpZHRoOiA4cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5jb25kLWNvbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb3Jle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnJpZ3Roe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbi50cmFzaHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5jb25kaXRpb25hbC1kcm9wZG93biB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG46aG9zdCB7XHJcbiAgICBhcHAtd3JpdGV7XHJcbiAgICAgICAgLndyaXRle1xyXG4gICAgICAgICAgICB3aWR0aDogNzB2dztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnRleHQtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi56aW5kZXgge1xyXG4gICAgei1pbmRleDogOTtcclxufVxyXG5cclxuLm5ldy1iYWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjBkZDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWJzLWJ0bi1ob3Zlci1ib3JkZXItY29sb3IpO1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYnMtYnRuLWZvY3VzLWJveC1zaGFkb3cpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLmNvbmQtY29sIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAuZm9ybS1jb250cm9sLCAuZm9ybS1zZWxlY3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cciJdfQ== */"] });


/***/ }),

/***/ 4928:
/*!*************************************************!*\
  !*** ./src/app/components/for/for.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForComponent": () => (/* binding */ ForComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _pipes_accessible_math_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/accessible-math.pipe */ 6584);
/* harmony import */ var src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/types.enum */ 3351);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);






function ForComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "for-cod-" + ctx_r0.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r0.commandsPlainText, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function ForComponent_div_3_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "GENERAL.NOT_VARIABLE"));
} }
function ForComponent_div_3_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "GENERAL.SELECT_VARIABLE"));
} }
function ForComponent_div_3_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", v_r13.value.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](v_r13.value.name);
} }
function ForComponent_div_3_select_30_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "GENERAL.NOT_VARIABLE"));
} }
function ForComponent_div_3_select_30_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "GENERAL.SELECT_VARIABLE"));
} }
function ForComponent_div_3_select_30_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", v_r17.value.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](v_r17.value.name);
} }
function ForComponent_div_3_select_30_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ForComponent_div_3_select_30_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r18.for.startValue = $event; })("change", function ForComponent_div_3_select_30_Template_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r20.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ForComponent_div_3_select_30_option_3_Template, 3, 4, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ForComponent_div_3_select_30_option_4_Template, 3, 4, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ForComponent_div_3_select_30_option_5_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "for-start-value-", ctx_r8.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r8.for.startValue)("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 7, "GENERAL.SELECT_VARIABLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 9, "GENERAL.SELECT_VARIABLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r8.variables.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.variables.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.variables);
} }
function ForComponent_div_3_input_31_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ForComponent_div_3_input_31_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r21.for.startValue = $event; })("change", function ForComponent_div_3_input_31_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r23.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "for-start-value-", ctx_r9.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r9.for.startValue)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 5, "GENERAL.DIGIT_VALUE"))("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 7, "GENERAL.DIGIT_VALUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 9, "GENERAL.DIGIT_VALUE"));
} }
function ForComponent_div_3_select_50_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "GENERAL.NOT_VARIABLE"));
} }
function ForComponent_div_3_select_50_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "GENERAL.SELECT_VARIABLE"));
} }
function ForComponent_div_3_select_50_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", v_r27.value.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](v_r27.value.name);
} }
function ForComponent_div_3_select_50_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ForComponent_div_3_select_50_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r28.for.finishValue = $event; })("change", function ForComponent_div_3_select_50_Template_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r30.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ForComponent_div_3_select_50_option_3_Template, 3, 4, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ForComponent_div_3_select_50_option_4_Template, 3, 4, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ForComponent_div_3_select_50_option_5_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "for-finish-value-", ctx_r10.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r10.for.finishValue)("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 7, "GENERAL.SELECT_VARIABLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 9, "GENERAL.SELECT_VARIABLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r10.variables.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.variables.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r10.variables);
} }
function ForComponent_div_3_input_51_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ForComponent_div_3_input_51_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r31.for.finishValue = $event; })("change", function ForComponent_div_3_input_51_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r33.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "for-finish-value-", ctx_r11.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r11.for.finishValue)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 5, "GENERAL.DIGIT_VALUE"))("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 7, "GENERAL.DIGIT_VALUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 9, "GENERAL.DIGIT_VALUE"));
} }
function ForComponent_div_3_div_75_app_write_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-write", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("remove", function ForComponent_div_3_div_75_app_write_1_Template_app_write_remove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r40.removeComponent(ctx_r40.for.components, $event); })("change", function ForComponent_div_3_div_75_app_write_1_Template_app_write_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r42.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r35 = ctx_r43.index;
    const component_r34 = ctx_r43.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("back", true)("index", i_r35)("hasToggle", false)("writer", component_r34.value)("components", ctx_r36.for.components)("variables", ctx_r36.variables);
} }
function ForComponent_div_3_div_75_app_operator_2_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-operator", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("remove", function ForComponent_div_3_div_75_app_operator_2_Template_app_operator_remove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r44.removeComponent(ctx_r44.for.components, $event); })("change", function ForComponent_div_3_div_75_app_operator_2_Template_app_operator_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r46.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r35 = ctx_r47.index;
    const component_r34 = ctx_r47.$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("back", true)("index", i_r35)("hasToggle", false)("operator", component_r34.value)("components", ctx_r37.for.components)("variables", ctx_r37.variables);
} }
function ForComponent_div_3_div_75_app_conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-conditional", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("remove", function ForComponent_div_3_div_75_app_conditional_3_Template_app_conditional_remove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r48.removeComponent(ctx_r48.for.components, $event); })("change", function ForComponent_div_3_div_75_app_conditional_3_Template_app_conditional_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r50.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r35 = ctx_r51.index;
    const component_r34 = ctx_r51.$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("back", true)("index", i_r35)("hasToggle", false)("conditional", component_r34.value)("components", ctx_r38.for.components)("variables", ctx_r38.variables);
} }
function ForComponent_div_3_div_75_app_for_4_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-for", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("remove", function ForComponent_div_3_div_75_app_for_4_Template_app_for_remove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r52.removeComponent(ctx_r52.for.components, $event); })("change", function ForComponent_div_3_div_75_app_for_4_Template_app_for_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r53); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r54.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r35 = ctx_r55.index;
    const component_r34 = ctx_r55.$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("back", true)("index", i_r35)("hasToggle", false)("for", component_r34.value)("components", ctx_r39.for.components)("variables", ctx_r39.variables);
} }
function ForComponent_div_3_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ForComponent_div_3_div_75_app_write_1_Template, 1, 6, "app-write", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ForComponent_div_3_div_75_app_operator_2_Template, 1, 6, "app-operator", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ForComponent_div_3_div_75_app_conditional_3_Template, 1, 6, "app-conditional", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ForComponent_div_3_div_75_app_for_4_Template, 1, 6, "app-for", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const component_r34 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.isWriter(component_r34));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.isOperator(component_r34));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.isConditional(component_r34));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.isFor(component_r34));
} }
function ForComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "div", 18)(4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ForComponent_div_3_Template_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r56.for.variable = $event; })("change", function ForComponent_div_3_Template_select_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r58.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ForComponent_div_3_option_10_Template, 3, 4, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ForComponent_div_3_option_11_Template, 3, 4, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ForComponent_div_3_option_12_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 17)(14, "div", 18)(15, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ForComponent_div_3_Template_select_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r59.for.startType = $event; })("change", function ForComponent_div_3_Template_select_change_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r60.clearStartValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ForComponent_div_3_select_30_Template, 6, 11, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ForComponent_div_3_input_31_Template, 4, 11, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 29)(33, "div", 30)(34, "div", 18)(35, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ForComponent_div_3_Template_select_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r61.for.finishType = $event; })("change", function ForComponent_div_3_Template_select_change_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r62.clearFinishValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, ForComponent_div_3_select_50_Template, 6, 11, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, ForComponent_div_3_input_51_Template, 4, 11, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 31)(53, "div", 18)(54, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ForComponent_div_3_Template_select_ngModelChange_54_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r63.for.incrementType = $event; })("change", function ForComponent_div_3_Template_select_change_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r64.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](55, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](61, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](62, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "++");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](66, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "\u2212\u2212");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ForComponent_div_3_Template_input_ngModelChange_68_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r65.for.incrementValue = $event; })("change", function ForComponent_div_3_Template_input_change_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r66.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](69, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](70, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 34)(73, "app-command-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ForComponent_div_3_Template_app_command_button_change_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r67.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](75, ForComponent_div_3_div_75_Template, 5, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "for-select-", ctx_r1.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 59, "GENERAL.REPEAT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "for-select-var-", ctx_r1.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.for.variable)("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 61, "GENERAL.SELECT_VARIABLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 63, "GENERAL.SELECT_VARIABLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.variables.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.variables.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.variables);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 65, "GENERAL.REPEAT_FROM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "for-start-type-", ctx_r1.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.for.startType)("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 67, "GENERAL.SELECT_DATA_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 69, "GENERAL.SELECT_DATA_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 71, "GENERAL.SELECT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "VARIABLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 73, "GENERAL.VARIABLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 75, "GENERAL.VALUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.for.startType == "VARIABLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.for.startType == "VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 77, "GENERAL.REPEAT_TO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "for-finish-type-", ctx_r1.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.for.finishType)("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](39, 79, "GENERAL.SELECT_DATA_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](40, 81, "GENERAL.SELECT_DATA_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 83, "GENERAL.SELECT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "VARIABLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](46, 85, "GENERAL.VARIABLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 87, "GENERAL.VALUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.for.finishType == "VARIABLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.for.finishType == "VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "for-increment-type-", ctx_r1.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.for.incrementType)("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](55, 89, "GENERAL.SELECT_OPERATOR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](56, 91, "GENERAL.SELECT_OPERATOR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](59, 93, "GENERAL.SELECT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "+")("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](62, 97, "GENERAL.INCREMENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](61, 95, "GENERAL.INCREMENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "-")("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](66, 101, "GENERAL.DECREMENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](65, 99, "GENERAL.DECREMENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "for-increment-value-", ctx_r1.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.for.incrementValue)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](69, 103, "GENERAL.DIGIT_VALUE"))("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](70, 105, "GENERAL.STEP_VALUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](71, 107, "GENERAL.STEP_VALUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", "inline")("title", "Adicionar comandos \u00E0 repeti\u00E7\u00E3o")("hasVariables", false)("components", ctx_r1.for.components)("variables", ctx_r1.variables)("text2", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.for.components);
} }
function ForComponent_app_command_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-command-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ForComponent_app_command_button_6_Template_app_command_button_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r68.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", "inline")("text", false)("title", "Comandos")("components", ctx_r2.components)("variables", ctx_r2.variables);
} }
function ForComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 48);
} }
function ForComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 49);
} }
class ForComponent {
    constructor(translate, accMath) {
        this.translate = translate;
        this.accMath = accMath;
        this.isHidden = true;
        this.text = true;
        this.text2 = true;
        this.back = false;
        this.hasToggle = true;
        this.components = [];
        this.iconComands = true;
        this.for = {
            variable: '',
            startType: '',
            startValue: '',
            finishType: '',
            finishValue: '',
            incrementType: '',
            incrementValue: '',
            components: []
        };
        this.forOperator = [];
        this.commandsPlainText = "";
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
    }
    isVariable(component) {
        return component.type == src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.VARIABLE;
    }
    isWriter(component) {
        return component.type == src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.WRITER;
    }
    isOperator(component) {
        return component.type == src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.OPERATOR;
    }
    isConditional(component) {
        return component.type == src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.CONDITIONAL;
    }
    isFor(component) {
        return component.type == src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.FOR_CODITIONAL;
    }
    removeComponent(components, index) {
        components.splice(index, 1);
        this.setStorage();
    }
    focusFor(index) {
        setTimeout(() => {
            let forElement = document.getElementById(`for-op-${this.index}`);
            if (forElement) {
                forElement.focus();
            }
        }, 200);
    }
    clearStartValue() {
        this.for.startValue = '';
        this.setStorage();
    }
    clearFinishValue() {
        this.for.finishValue = '';
        this.setStorage();
    }
    removeFor() {
        this.remove.emit(this.index);
    }
    toggleHidden() {
        this.isHidden = !this.isHidden;
        if (!this.isHidden) {
            this.formatCommands();
            setTimeout(() => {
                var _a;
                (_a = document.getElementById("for-cod-" + this.index)) === null || _a === void 0 ? void 0 : _a.focus();
            }, 200);
        }
        else {
            setTimeout(() => {
                var _a;
                (_a = document.getElementById("for-select-var-" + this.index)) === null || _a === void 0 ? void 0 : _a.focus();
            }, 200);
        }
    }
    formatCommands() {
        const currentLang = this.translate.currentLang;
        const incType = this.accMath.transform(this.for.incrementType);
        this.commandsPlainText = `<p class="mb-0">${currentLang == 'pt' ? 'repita_para' : 'repeat_for'} ${this.for.variable} ${currentLang == 'pt' ? 'de' : 'from'} ${this.for.startValue} <span tabindex="-1">${currentLang == 'pt' ? 'ate' : 'to'}</span>  ${this.for.finishValue} ${currentLang == 'pt' ? 'passo' : 'pass'} ${incType}${this.for.incrementValue} {</p>`;
        this.commandsPlainText += `<p>${this.runCommands(this.for.components)}</p>`;
        this.commandsPlainText += `<p>}</p>`;
    }
    runCommands(components) {
        const currentLang = this.translate.currentLang;
        let programComands = "";
        // Other components except variable types
        components.filter((c) => c.type != src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.VARIABLE).forEach((c) => {
            if (c.type == src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.WRITER) {
                if (c.value.type == src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.VARIABLE) {
                    programComands += `&emsp; ${currentLang == 'pt' ? 'escreva' : 'write'}(${c.value.value}) <br/>`;
                }
                else {
                    programComands += `&emsp; ${currentLang == 'pt' ? 'escreva' : 'write'}("${c.value.value}") <br/>`;
                }
            }
            if (c.type == src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.OPERATOR) {
                programComands += `&emsp; ${c.value.reference} ${this.accMath.transform('<-')} ${this.accMath.transform(c.value.value)} ${this.accMath.transform(';')} <br/>`;
            }
            if (c.type == src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.CONDITIONAL) {
                programComands += `&emsp; ${currentLang == 'pt' ? 'se' : 'if'} ( ${this.accMath.transform(c.value.condition.value)} ) { <br/>`;
                programComands += `&emsp; ${this.runCommands(c.value.condition.components)}`;
                programComands += `&emsp; } ${currentLang == 'pt' ? 'senao' : 'else'} { <br/>`;
                programComands += `&emsp; ${this.runCommands(c.value.nocondition.components)}`;
                programComands += `&emsp; } <br/>`;
            }
            if (c.type == src_app_enums_types_enum__WEBPACK_IMPORTED_MODULE_1__.TypesEnum.FOR_CODITIONAL) {
                programComands += `&emsp; ${currentLang == 'pt' ? 'repita_para' : 'repeat_for'} ${c.value.variable} ${currentLang == 'pt' ? 'de' : 'from'} ${c.value.startValue} ${currentLang == 'pt' ? 'ate' : 'to'} ${c.value.finishValue} ${currentLang == 'pt' ? 'passo' : 'pass'} ${c.value.incrementType}${c.value.incrementValue} { <br/>`;
                programComands += `&emsp; ${this.runCommands(c.value.components)}`;
                programComands += `&emsp; } <br/>`;
            }
        });
        return programComands;
    }
    setStorage() {
        this.change.emit();
    }
}
ForComponent.ɵfac = function ForComponent_Factory(t) { return new (t || ForComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_pipes_accessible_math_pipe__WEBPACK_IMPORTED_MODULE_0__.AccessibleMathPipe)); };
ForComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ForComponent, selectors: [["app-for"]], inputs: { text: "text", text2: "text2", title: "title", back: "back", index: "index", hasToggle: "hasToggle", components: "components", variables: "variables", iconComands: "iconComands", for: "for" }, outputs: { remove: "remove", change: "change" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_pipes_accessible_math_pipe__WEBPACK_IMPORTED_MODULE_0__.AccessibleMathPipe])], decls: 18, vars: 19, consts: [["id", "for", 1, "mb-2", "col-12", "px-1", "back", 3, "ngClass"], [1, "row", "py-2", "px-2", "content", "align-items-start"], ["class", "col-12 col-lg-10 d-flex justify-content-start text py-1", 4, "ngIf"], ["class", "d-flex flex-column col-12 col-lg-10 for justify-content-center py-1", 4, "ngIf"], [1, "col-12", "col-lg-2", "py-1"], [1, "d-flex", "justify-content-end", "align-items-center"], [3, "mode", "text", "title", "components", "variables", "change", 4, "ngIf"], [1, "btn", "btn-transparent", 3, "title", "click"], ["class", "bi bi-unlock-fill", "aria-hidden", "true", 4, "ngIf"], ["class", "bi bi-lock-fill", "aria-hidden", "true", 4, "ngIf"], [1, "btn", "btn-transparent", "text-danger", "pr-2", 3, "title", "click"], ["aria-hidden", "true"], [1, "col-12", "col-lg-10", "d-flex", "justify-content-start", "text", "py-1"], ["tabindex", "0", 1, "mb-0", "text-left", 3, "id"], [3, "innerHTML"], [1, "d-flex", "flex-column", "col-12", "col-lg-10", "for", "justify-content-center", "py-1"], [1, "row", "row-cols-1", "row-cols-md-2", "g-2", "mb-2"], [1, "col"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-start", "gap-1"], ["tabindex", "-1", 1, "blue", "me-1", 3, "id"], [1, "form-select", "flex-grow-1", 3, "id", "ngModel", "title", "ngModelChange", "change"], ["disabled", "", 3, "ngValue", 4, "ngIf"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["tabindex", "0", 1, "me-1"], [1, "form-select", 3, "id", "ngModel", "title", "ngModelChange", "change"], ["disabled", "", 3, "ngValue"], [3, "ngValue"], ["class", "form-select", 3, "id", "ngModel", "title", "ngModelChange", "change", 4, "ngIf"], ["class", "form-control", "type", "text", 3, "id", "ngModel", "placeholder", "title", "ngModelChange", "change", 4, "ngIf"], [1, "row", "row-cols-1", "row-cols-md-3", "g-2", "align-items-center", "mb-2"], [1, "col-12", "col-md-6", "col-lg-6"], [1, "col-12", "col-md-4", "col-lg-5"], [3, "ngValue", "title"], ["type", "text", 1, "form-control", 3, "id", "ngModel", "placeholder", "title", "ngModelChange", "change"], [1, "col-12", "col-md-2", "col-lg-1", "d-flex", "justify-content-start", "justify-content-md-center", "align-items-center"], [3, "mode", "title", "hasVariables", "components", "variables", "text2", "change"], [1, "row", "d-flex", "flex-wrap", "zindex", "col", "mt-2"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [3, "back", "index", "hasToggle", "writer", "components", "variables", "remove", "change", 4, "ngIf"], [3, "back", "index", "hasToggle", "operator", "components", "variables", "remove", "change", 4, "ngIf"], [3, "back", "index", "hasToggle", "conditional", "components", "variables", "remove", "change", 4, "ngIf"], [3, "back", "index", "hasToggle", "for", "components", "variables", "remove", "change", 4, "ngIf"], [3, "back", "index", "hasToggle", "writer", "components", "variables", "remove", "change"], [3, "back", "index", "hasToggle", "operator", "components", "variables", "remove", "change"], [3, "back", "index", "hasToggle", "conditional", "components", "variables", "remove", "change"], [3, "back", "index", "hasToggle", "for", "components", "variables", "remove", "change"], [3, "mode", "text", "title", "components", "variables", "change"], ["aria-hidden", "true", 1, "bi", "bi-unlock-fill"], ["aria-hidden", "true", 1, "bi", "bi-lock-fill"]], template: function ForComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ForComponent_div_2_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ForComponent_div_3_Template, 76, 109, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ForComponent_app_command_button_6_Template, 1, 5, "app-command-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ForComponent_Template_button_click_7_listener() { return ctx.toggleHidden(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ForComponent_span_12_Template, 1, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ForComponent_span_13_Template, 1, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ForComponent_Template_button_click_14_listener() { return ctx.removeFor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.back == true ? "new-back" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.isHidden ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 13, "GENERAL.READ_CODE") : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 15, "GENERAL.READ_EDIT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.isHidden ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 9, "GENERAL.READ_CODE") : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 11, "GENERAL.READ_EDIT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 17, "GENERAL.REMOVE_COMANDS"));
    } }, styles: [".text[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.zindex[_ngcontent-%COMP%] {\n  z-index: 9;\n}\n\n.new-back[_ngcontent-%COMP%] {\n  background-color: #ffb0dd;\n}\n\n.blue[_ngcontent-%COMP%]:focus {\n  color: #3083ff;\n}\n\nselect[_ngcontent-%COMP%] {\n  width: auto;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.for[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n\ninput[_ngcontent-%COMP%] {\n  min-width: 5rem;\n  max-width: 8rem;\n}\n\n.more[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.blue[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n.rigth[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n\n.trash[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n}\n\n[_nghost-%COMP%]   app-write[_ngcontent-%COMP%]   .write[_ngcontent-%COMP%] {\n  width: 70vw;\n}\n\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: var(--bs-btn-hover-border-color);\n  outline: 0;\n  box-shadow: var(--bs-btn-focus-box-shadow);\n}\n\n@media screen and (max-width: 576px) {\n  input[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: 100%;\n  }\n\n  .form-select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBR0o7O0FBREE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUtKOztBQUhBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUpBO0VBQ0ksV0FBQTtBQU9KOztBQUxBO0VBQ0ksaUJBQUE7QUFRSjs7QUFMQTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtBQVFKOztBQUhRO0VBQ0ksV0FBQTtBQU1aOztBQUFJO0VBQ0ksOENBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7QUFHUjs7QUFDQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLFdBQUE7RUFFTjs7RUFBRTtJQUNJLFdBQUE7RUFHTjtBQUNGIiwiZmlsZSI6ImZvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnppbmRleCB7XHJcbiAgICB6LWluZGV4OiA5O1xyXG59XHJcblxyXG4ubmV3LWJhY2t7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMGRkO1xyXG59XHJcbi5ibHVlOmZvY3Vze1xyXG4gICAgY29sb3I6ICMzMDgzZmY7XHJcbn1cclxuXHJcbnNlbGVjdHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcbi5jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uZm9ye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuaW5wdXR7XHJcbiAgICBtaW4td2lkdGg6IDVyZW07XHJcbiAgICBtYXgtd2lkdGg6IDhyZW07XHJcbn1cclxuLm1vcmV7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uYmx1ZXtcclxuICAgIGNvbG9yOiBibHVlO1xyXG59XHJcbi5yaWd0aHtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG4udHJhc2h7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gICAgYXBwLXdyaXRle1xyXG4gICAgICAgIC53cml0ZXtcclxuICAgICAgICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuIHtcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnMtYnRuLWhvdmVyLWJvcmRlci1jb2xvcik7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1icy1idG4tZm9jdXMtYm94LXNoYWRvdyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tc2VsZWN0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 5307:
/*!***********************************************************!*\
  !*** ./src/app/components/operator/operator.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperatorComponent": () => (/* binding */ OperatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _command_button_command_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../command-button/command-button.component */ 5888);
/* harmony import */ var _pipes_accessible_math_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/accessible-math.pipe */ 6584);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);








function OperatorComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "p", 13)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "accessibleMath");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "accessibleMath");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "accessibleMath");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "operator-cod-" + ctx_r0.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.operator.reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 5, "<-"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 7, ctx_r0.operator.value), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 9, ";"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function OperatorComponent_div_3_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "GENERAL.SELECT_VARIABLE"), " ");
} }
function OperatorComponent_div_3_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "GENERAL.NOT_VARIABLE"));
} }
function OperatorComponent_div_3_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", v_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](v_r9.value.name);
} }
function OperatorComponent_div_3_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OperatorComponent_div_3_div_9_div_1_Template_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const op_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return op_r10.value = $event; })("change", function OperatorComponent_div_3_div_9_div_1_Template_select_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r20.changeValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "(");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const op_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("id", "operator-op-", ctx_r12.index, "-", op_r10.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", op_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 9, "GENERAL.SELECT_PAR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "(")("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 11, "GENERAL.OPEN_PARENTHESES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", ")")("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 13, "GENERAL.CLOSE_PARENTHESES"));
} }
function OperatorComponent_div_3_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OperatorComponent_div_3_div_9_div_2_Template_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const op_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return op_r10.type = $event; })("change", function OperatorComponent_div_3_div_9_div_2_Template_select_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const op_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r25.clearValue(op_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const op_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("id", "operator-op1-", ctx_r13.index, "-", op_r10.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", op_r10.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "ATTRIBUTE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 9, "GENERAL.SELECT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "VARIABLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 11, "GENERAL.VARIABLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 13, "GENERAL.VALUE"));
} }
function OperatorComponent_div_3_div_9_div_3_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "GENERAL.SELECT_VARIABLE"));
} }
function OperatorComponent_div_3_div_9_div_3_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "GENERAL.NOT_VARIABLE"));
} }
function OperatorComponent_div_3_div_9_div_3_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", v_r31.value.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](v_r31.value.name);
} }
function OperatorComponent_div_3_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OperatorComponent_div_3_div_9_div_3_Template_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const op_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return op_r10.value = $event; })("change", function OperatorComponent_div_3_div_9_div_3_Template_select_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r35.changeValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OperatorComponent_div_3_div_9_div_3_option_2_Template, 3, 4, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OperatorComponent_div_3_div_9_div_3_option_3_Template, 3, 4, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OperatorComponent_div_3_div_9_div_3_option_4_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const op_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("id", "operator-op-", ctx_r14.index, "-", op_r10.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", op_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.getVariables().length && op_r10.value == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r14.getVariables().length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r14.getVariables());
} }
function OperatorComponent_div_3_div_9_div_4_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OperatorComponent_div_3_div_9_div_4_input_1_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r41); const op_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; return op_r10.value = $event; })("keyup", function OperatorComponent_div_3_div_9_div_4_input_1_Template_input_keyup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r41); const op_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r42.changeInputValue(op_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("id", "operator-op-", ctx_r37.index, "-", op_r10.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", op_r10.value)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 4, "GENERAL.DIGIT_VALUE"));
} }
function OperatorComponent_div_3_div_9_div_4_select_2_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OperatorComponent_div_3_div_9_div_4_select_2_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r47); const op_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; return op_r10.value = $event; })("change", function OperatorComponent_div_3_div_9_div_4_select_2_Template_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r48.changeValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const op_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "operator-op-", op_r10.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", op_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 8, "GENERAL.SELECT_VALUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "verdadeiro");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 10, "GENERAL.TRUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "falso");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 12, "GENERAL.FALSE"));
} }
function OperatorComponent_div_3_div_9_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OperatorComponent_div_3_div_9_div_4_input_1_Template, 2, 6, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OperatorComponent_div_3_div_9_div_4_select_2_Template, 10, 14, "select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.operator.currentVariable.type != "BOOLEAN");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.operator.currentVariable.type == "BOOLEAN");
} }
function OperatorComponent_div_3_div_9_div_5_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "GENERAL.SELECT_OPERATOR"));
} }
function OperatorComponent_div_3_div_9_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OperatorComponent_div_3_div_9_div_5_Template_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r53); const op_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return op_r10.value = $event; })("change", function OperatorComponent_div_3_div_9_div_5_Template_select_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r53); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r54.changeValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OperatorComponent_div_3_div_9_div_5_option_2_Template, 3, 4, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "option", 24)(4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "option", 24)(7, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u2212");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "option", 24)(10, "span", 11)(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u2217");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "option", 24)(14, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u00F7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const op_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("id", "operator-op-", ctx_r16.index, "-", op_r10.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", op_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", op_r10.value == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", "/");
} }
function OperatorComponent_div_3_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OperatorComponent_div_3_div_9_div_1_Template, 11, 15, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OperatorComponent_div_3_div_9_div_2_Template, 11, 15, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OperatorComponent_div_3_div_9_div_3_Template, 5, 6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OperatorComponent_div_3_div_9_div_4_Template, 3, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, OperatorComponent_div_3_div_9_div_5_Template, 16, 8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 26)(7, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OperatorComponent_div_3_div_9_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const i_r11 = restoredCtx.index; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r56.clearOperator(i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const op_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", op_r10.type == "PARENTHESIS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", op_r10.type == "ATTRIBUTE" || op_r10.type == "VARIABLE" || op_r10.type == "VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", op_r10.type == "VARIABLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", op_r10.type == "VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", op_r10.type == "OPERATOR");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 6, "GENERAL.CLEAN"));
} }
function OperatorComponent_div_3_div_10_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OperatorComponent_div_3_div_10_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r59.addOperator("OPERATOR"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "GENERAL.OPERATOR_MATH"));
} }
function OperatorComponent_div_3_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35)(1, "button", 36)(2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 38)(8, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OperatorComponent_div_3_div_10_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r61.addOperator("PARENTHESIS", "("); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "(");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OperatorComponent_div_3_div_10_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r63.addOperator("PARENTHESIS", ")"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OperatorComponent_div_3_div_10_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r62); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r64.addOperator("VARIABLE"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OperatorComponent_div_3_div_10_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r62); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r65.addOperator("VALUE"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, OperatorComponent_div_3_div_10_button_28_Template, 4, 3, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 6, "GENERAL.ADD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 8, "GENERAL.OPEN_PARENTHESES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 10, "GENERAL.CLOSE_PARENTHESES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 12, "GENERAL.VARIABLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 14, "GENERAL.VALUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((ctx_r8.operator.currentVariable == null ? null : ctx_r8.operator.currentVariable.type) == "INTEGER" || (ctx_r8.operator.currentVariable == null ? null : ctx_r8.operator.currentVariable.type) == "DOUBLE") && ctx_r8.operator.operators.length > 0);
} }
function OperatorComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OperatorComponent_div_3_Template_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r66.operator.currentVariable = $event; })("change", function OperatorComponent_div_3_Template_select_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r67); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r68.changeVariable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OperatorComponent_div_3_option_3_Template, 3, 4, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OperatorComponent_div_3_option_4_Template, 3, 4, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, OperatorComponent_div_3_option_5_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, OperatorComponent_div_3_div_9_Template, 10, 8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, OperatorComponent_div_3_div_10_Template, 29, 16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "select-var-" + ctx_r1.index)("ngModel", ctx_r1.operator.currentVariable)("compareWith", ctx_r1.compareFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.variables.length && ctx_r1.operator.name == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.variables.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.variables);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 9, "GENERAL.RECEIVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.operator.operators);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.operator.currentVariable);
} }
function OperatorComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 41);
} }
function OperatorComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 42);
} }
class OperatorComponent {
    constructor() {
        this.text = true;
        this.back = false;
        this.hasToggle = true;
        this.components = [];
        this.operator = {
            reference: '',
            value: ''
        };
        this.pressedAlt = false;
        this.isHidden = true;
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
    }
    changeVariable() {
        this.operator.reference = this.operator.currentVariable.name;
        this.operator.operators = [];
        this.setStorage();
    }
    addOperator(type, value = "") {
        this.operator.operators.push({
            index: this.operator.operators.length,
            type: type,
            value: value,
        });
        this.changeValue();
        this.focusOperator(this.operator.operators.length - 1);
    }
    focusOperator(indexOp) {
        setTimeout(() => {
            let operatorElement = document.getElementById(`operator-op-${this.index}-${indexOp}`);
            if (operatorElement) {
                operatorElement.focus();
            }
        }, 200);
    }
    clearOperator(index) {
        this.operator.operators.splice(index, 1);
        this.changeValue();
    }
    clearValue(operator) {
        operator.value = "";
        this.setStorage();
    }
    changeValue() {
        this.operator.value = "";
        this.operator.operators.forEach((op) => {
            this.operator.value += `${op.value} `;
        });
        this.setStorage();
    }
    changeInputValue(operator) {
        switch (this.operator.currentVariable.type) {
            case "INTEGER":
                if (!/^[0-9]+$/.test(operator.value)) {
                    operator.value = operator.value.substring(0, operator.value.length - 1);
                }
                break;
            case "DOUBLE":
                if (!/^[+-]?\d+((\.|\,)\d+)?$/.test(operator.value)) {
                    let lastCharacter = operator.value.substring(operator.value.length - 1, operator.value.length);
                    if (lastCharacter != "." && lastCharacter != ",") {
                        operator.value = operator.value.substring(0, operator.value.length - 1);
                    }
                }
                break;
            default:
                break;
        }
        this.changeValue();
    }
    getVariables() {
        if (this.operator.currentVariable.type == "DOUBLE") {
            return this.variables.filter((v) => v.value.type == 'DOUBLE' || v.value.type == 'INTEGER');
        }
        else {
            return this.variables.filter((v) => v.value.type == this.operator.currentVariable.type);
        }
    }
    toggleHidden() {
        this.isHidden = !this.isHidden;
        if (!this.isHidden) {
            setTimeout(() => {
                var _a;
                (_a = document.getElementById("operator-cod-" + this.index)) === null || _a === void 0 ? void 0 : _a.focus();
            }, 200);
        }
        else {
            setTimeout(() => {
                var _a;
                (_a = document.getElementById("select-var-" + this.index)) === null || _a === void 0 ? void 0 : _a.focus();
            }, 200);
        }
    }
    removeOperator() {
        this.remove.emit(this.index);
    }
    focusElement(id) {
        setTimeout(() => {
            let operatorElement = document.getElementById(id);
            if (operatorElement) {
                operatorElement.focus();
            }
        }, 200);
    }
    setStorage() {
        this.change.emit();
    }
    compareFn(var1, var2) {
        return var1 && var2 ? var1.name === var2.name : var1 === var2;
    }
}
OperatorComponent.ɵfac = function OperatorComponent_Factory(t) { return new (t || OperatorComponent)(); };
OperatorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OperatorComponent, selectors: [["app-operator"]], inputs: { text: "text", back: "back", title: "title", index: "index", hasToggle: "hasToggle", components: "components", variables: "variables", operator: "operator" }, outputs: { remove: "remove", change: "change" }, decls: 18, vars: 23, consts: [[1, "mb-2", "col-12", "px-1", "back", "write", 3, "ngClass"], [1, "row", "py-2", "px-3", "content", "align-items-center"], ["class", "col-12 col-lg-9 d-flex justify-content-start align-items-center py-1", 4, "ngIf"], ["class", "col-12 col-lg-9 operator py-1", 4, "ngIf"], [1, "col-12", "col-lg-3", "py-1"], [1, "d-flex", "justify-content-end", "align-items-center"], [3, "mode", "text", "title", "components", "variables", "change"], [1, "btn", "btn-transparent", 3, "title", "click"], ["class", "bi bi-unlock-fill", "aria-hidden", "true", 4, "ngIf"], ["class", "bi bi-lock-fill", "aria-hidden", "true", 4, "ngIf"], [1, "btn", "btn-transparent", "text-danger", "pr-2", 3, "title", "click"], ["aria-hidden", "true"], [1, "col-12", "col-lg-9", "d-flex", "justify-content-start", "align-items-center", "py-1"], ["tabindex", "0", 1, "mb-0", 3, "id"], [3, "innerHTML"], [1, "col-12", "col-lg-9", "operator", "py-1"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2", "mb-2"], [1, "form-select", "select-main-var", 3, "id", "ngModel", "compareWith", "ngModelChange", "change"], ["disabled", "", 3, "ngValue", 4, "ngIf"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["tabindex", "0", 1, "rigth", "me-2"], ["class", "d-flex flex-wrap align-items-center gap-2 mb-2", 4, "ngFor", "ngForOf"], ["ngbDropdown", "", "class", "d-flex align-items-center mt-1", 4, "ngIf"], ["disabled", "", 3, "ngValue"], [3, "ngValue"], ["class", "op-col", 4, "ngIf"], [1, "op-col"], [1, "trash", 3, "title", "click"], [1, "bi", "bi-trash"], [1, "form-select", 3, "id", "ngModel", "ngModelChange", "change"], [3, "ngValue", "title"], ["class", "form-control", "type", "text", 3, "id", "ngModel", "placeholder", "ngModelChange", "keyup", 4, "ngIf"], ["class", "form-select", 3, "id", "ngModel", "ngModelChange", "change", 4, "ngIf"], ["type", "text", 1, "form-control", 3, "id", "ngModel", "placeholder", "ngModelChange", "keyup"], [1, "sr-only"], ["ngbDropdown", "", 1, "d-flex", "align-items-center", "mt-1"], ["type", "button", "id", "dropdownAdd", "ngbDropdownToggle", "", 1, "btn", "btn-primary"], ["aria-hidden", "false", 1, "sr-only"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownAdd"], ["tabindex", "0", 1, "dropdown-item", 3, "click"], ["class", "dropdown-item", "tabindex", "0", 3, "click", 4, "ngIf"], ["aria-hidden", "true", 1, "bi", "bi-unlock-fill"], ["aria-hidden", "true", 1, "bi", "bi-lock-fill"]], template: function OperatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OperatorComponent_div_2_Template, 10, 11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OperatorComponent_div_3_Template, 11, 11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "app-command-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function OperatorComponent_Template_app_command_button_change_6_listener() { return ctx.setStorage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OperatorComponent_Template_button_click_7_listener() { return ctx.toggleHidden(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, OperatorComponent_span_12_Template, 1, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, OperatorComponent_span_13_Template, 1, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OperatorComponent_Template_button_click_14_listener() { return ctx.removeOperator(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.back == true ? "new-back" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", "inline")("text", false)("title", "Comandos")("components", ctx.components)("variables", ctx.variables);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.isHidden ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 17, "GENERAL.READ_CODE") : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 19, "GENERAL.READ_EDIT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.isHidden ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 13, "GENERAL.READ_CODE") : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 15, "GENERAL.READ_EDIT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 21, "GENERAL.REMOVE_COMANDS"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownMenu, _command_button_command_button_component__WEBPACK_IMPORTED_MODULE_0__.CommandButtonComponent], pipes: [_pipes_accessible_math_pipe__WEBPACK_IMPORTED_MODULE_1__.AccessibleMathPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["input[_ngcontent-%COMP%] {\n  width: 5rem;\n}\n\nselect[_ngcontent-%COMP%] {\n  width: auto;\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.operator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n\n.select-main-var[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 140px;\n}\n\n.op-col[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n}\n\n.more[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.rigth[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n\n.trash[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n}\n\n.new-back[_ngcontent-%COMP%] {\n  background-color: #ffb0dd;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n\n@media screen and (max-width: 576px) {\n  .select-main-var[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .op-col[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .op-col[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZXJhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBR0o7O0FBQUE7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxpQkFBQTtBQUlKOztBQURBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0FBSUo7O0FBREE7RUFDSSx5QkFBQTtBQUlKOztBQURBO0VBQ0ksd0JBQUE7QUFJSjs7QUFEQTtFQUNJO0lBQ0ksV0FBQTtFQUlOOztFQURNO0lBQ0ksV0FBQTtFQUlWO0FBQ0YiLCJmaWxlIjoib3BlcmF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG59XHJcblxyXG5zZWxlY3R7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4ub3BlcmF0b3J7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLnNlbGVjdC1tYWluLXZhciB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1pbi13aWR0aDogMTQwcHg7XHJcbn1cclxuXHJcbi5vcC1jb2wge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubW9yZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5yaWd0aHtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG4udHJhc2h7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm5ldy1iYWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjBkZDtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAuc2VsZWN0LW1haW4tdmFyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5vcC1jb2wge1xyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wsIC5mb3JtLXNlbGVjdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyIl19 */"] });


/***/ }),

/***/ 2933:
/*!***********************************************************!*\
  !*** ./src/app/components/terminal/terminal.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerminalComponent": () => (/* binding */ TerminalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);




function TerminalComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12)(8, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TerminalComponent_div_8_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.acceptConsent.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Prosseguir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TerminalComponent_div_8_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.cancelConsent.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "CONSENT_MODAL.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "CONSENT_MODAL.DESCRIPTION"));
} }
function TerminalComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15)(1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "[LOG] Monitoramento pronto. Aguardando intera\u00E7\u00F5es...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "[LOG] Gravando atividade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " A grava\u00E7\u00E3o est\u00E1 em andamento. Todas as intera\u00E7\u00F5es est\u00E3o sendo registradas.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Para encerrar a grava\u00E7\u00E3o, clique no bot\u00E3o \"Encerrar Grava\u00E7\u00E3o\". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function TerminalComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20)(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Grava\u00E7\u00E3o finalizada.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TerminalComponent_div_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.downloadAction.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Baixar relat\u00F3rio da atividade ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function TerminalComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "TERMINAL.START"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "TERMINAL.FINISH"));
} }
function TerminalComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TerminalComponent_div_11_div_2_Template, 8, 6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isRunning);
} }
class TerminalComponent {
    constructor() {
        this.isRunning = false;
        this.showConsent = false;
        this.isRecordingLog = false;
        this.isDownloadReady = false;
        this.acceptConsent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.cancelConsent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.downloadAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
}
TerminalComponent.ɵfac = function TerminalComponent_Factory(t) { return new (t || TerminalComponent)(); };
TerminalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TerminalComponent, selectors: [["app-terminal"]], inputs: { isRunning: "isRunning", showConsent: "showConsent", isRecordingLog: "isRecordingLog", isDownloadReady: "isDownloadReady" }, outputs: { acceptConsent: "acceptConsent", cancelConsent: "cancelConsent", downloadAction: "downloadAction" }, decls: 12, vars: 4, consts: [["id", "terminal", 1, "acessible-terminal"], [1, "bash"], [1, "bash-title"], [1, "bi", "bi-eraser-fill"], ["id", "title-terminal", "tabindex", "0"], ["id", "ivprog-term", 1, "bash-body", "ivprog-term-div"], ["id", "ivprog-terminal-inputdiv"], ["id", "terminal-consent-box", "tabindex", "-1", "style", "color: white; outline: none;", 4, "ngIf"], ["id", "log-recording-message", "tabindex", "-1", "aria-live", "assertive", "class", "recording-log-container", "style", "outline: none;", 4, "ngIf"], ["id", "terminal-download-box", "tabindex", "-1", "style", "color: white; outline: none; padding: 10px;", "class", "d-flex flex-column align-items-start", 4, "ngIf"], ["id", "cmd", 4, "ngIf"], ["id", "terminal-consent-box", "tabindex", "-1", 2, "color", "white", "outline", "none"], [1, "modal-actions", "mt-3"], [1, "btn", "btn-success", "me-2", 3, "click"], [1, "btn", "btn-danger", 2, "background-color", "#ff6b6b", "border-color", "#ff6b6b", 3, "click"], ["id", "log-recording-message", "tabindex", "-1", "aria-live", "assertive", 1, "recording-log-container", 2, "outline", "none"], [1, "log-ready"], [1, "log-recording"], [1, "loading-dots"], [1, "log-description"], ["id", "terminal-download-box", "tabindex", "-1", 1, "d-flex", "flex-column", "align-items-start", 2, "color", "white", "outline", "none", "padding", "10px"], [2, "color", "#FFEB3B", "font-weight", "bold", "margin-bottom", "12px"], ["id", "btn-download-log", 1, "btn", "btn-warning", "btn-download-log", 3, "click"], [1, "bi", "bi-download", "me-2"], ["id", "cmd"], ["id", "cursor"], ["tabindex", "0", "id", "textTerminal", 4, "ngIf"], ["tabindex", "0", "id", "textTerminal"], ["tabindex", "0"], ["tabindex", "0", "id", "terminalOutput"]], template: function TerminalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Terminal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TerminalComponent_div_8_Template, 12, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TerminalComponent_div_9_Template, 11, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TerminalComponent_div_10_Template, 6, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TerminalComponent_div_11_Template, 3, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showConsent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRecordingLog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDownloadReady);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showConsent && !ctx.isDownloadReady);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["@charset \"UTF-8\";\n.bash[_ngcontent-%COMP%] {\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);\n  border-radius: 3px;\n  font-family: \"Andale Mono\", Consolas, \"Courier New\" !important;\n}\n.bash-title[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #525252;\n  padding: 5px 0;\n  margin: 0;\n  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.5);\n  font-size: 0.85em;\n  border: 1px solid #CCCCCC;\n  border-bottom: none;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  background: #f7f7f7;\n  background: linear-gradient(to bottom, #f7f7f7 0%, #B8B8B8 100%);\n}\n.bash-body[_ngcontent-%COMP%] {\n  background: #111010;\n  \n  color: #F8F8FF;\n  font: 14px \"Andale Mono\", Consolas, \"Courier New\";\n  line-height: 1.6em;\n  border: 1px solid #CCCCCC;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.ivprog-term-div[_ngcontent-%COMP%] {\n  background-color: black;\n  width: 100%;\n  height: 12rem;\n  overflow-y: scroll;\n}\n#cmd[_ngcontent-%COMP%] {\n  font-family: courier;\n  font-size: 14px;\n  line-height: normal;\n  background: inherit;\n  color: #21f838;\n  padding: 5px;\n  overflow: hidden;\n}\n.ivprog-term-div[_ngcontent-%COMP%] {\n  overflow: scroll;\n}\n.acessible-terminal[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.acessible-terminal[_ngcontent-%COMP%]   .bash-title[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.recording-log-container[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-family: courier, monospace;\n  font-size: 14px;\n  line-height: 1.8;\n}\n.log-ready[_ngcontent-%COMP%] {\n  color: #4CAF50;\n  \n  margin-bottom: 8px;\n}\n.log-recording[_ngcontent-%COMP%] {\n  color: #FF9800;\n  \n  margin-bottom: 8px;\n  font-weight: bold;\n}\n.log-description[_ngcontent-%COMP%] {\n  color: #E0E0E0;\n  \n  margin-top: 12px;\n}\n.loading-dots[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #FF9800;\n  letter-spacing: 2px;\n  animation: pulsar 1.2s infinite alternate;\n}\n@keyframes pulsar {\n  0% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.btn-download-log[_ngcontent-%COMP%] {\n  background-color: #102a6c;\n  color: #ffffff;\n  border: none;\n}\n.btn-download-log[_ngcontent-%COMP%]:hover, .btn-download-log[_ngcontent-%COMP%]:focus {\n  background-color: #1a3c8e;\n  color: #ffffff;\n  box-shadow: 0 0 0 2px #cccccc;\n}\n.btn-download-log[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n}\n@media screen and (max-width: 768px) {\n  .acessible-terminal[_ngcontent-%COMP%] {\n    padding: 1.5rem 0.25rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSw4REFBQTtBQUVKO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLCtDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0VBQUE7QUFFSjtBQUNBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0FBRUo7QUFDQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQ0E7RUFDSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQ0E7RUFDSSxnQkFBQTtBQUVKO0FBQ0E7RUFDSSxlQUFBO0FBRUo7QUFDQTtFQUNJLDRCQUFBO0FBRUo7QUFDQTtFQUNJLFNBQUE7QUFFSjtBQUNBO0VBQ0ksYUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUo7QUFDQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFDQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQ0E7RUFDSSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQ0E7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FBRUo7QUFDQTtFQUNJO0lBQ0ksWUFBQTtFQUVOO0VBQ0U7SUFDSSxVQUFBO0VBQ047QUFDRjtBQUVBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUFKO0FBRUk7RUFFSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQURSO0FBSUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFGUjtBQU1BO0VBQ0k7SUFDSSx1QkFBQTtFQUhOO0FBQ0YiLCJmaWxlIjoidGVybWluYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzaCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMzBweCByZ2IoMCAwIDAgLyA0MCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQW5kYWxlIE1vbm9cIiwgQ29uc29sYXMsIFwiQ291cmllciBOZXdcIiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmFzaC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzUyNTI1MjtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCByZ2IoMjU1IDI1NSAyNTUgLyA1MCUpO1xyXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2Y3ZjdmNyAwJSwgI0I4QjhCOCAxMDAlKTtcclxufVxyXG5cclxuLmJhc2gtYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTExMDEwO1xyXG4gICAgLyogbGlzdC1zdHlsZTogbm9uZTsgKi9cclxuICAgIGNvbG9yOiAjRjhGOEZGO1xyXG4gICAgZm9udDogMTRweCAnQW5kYWxlIE1vbm8nLCBDb25zb2xhcywgJ0NvdXJpZXIgTmV3JztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4uaXZwcm9nLXRlcm0tZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEycmVtO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4jY21kIHtcclxuICAgIGZvbnQtZmFtaWx5OiBjb3VyaWVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICBjb2xvcjogIzIxZjgzODtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pdnByb2ctdGVybS1kaXYge1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLmFjZXNzaWJsZS10ZXJtaW5hbCB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbn1cclxuXHJcbi5hY2Vzc2libGUtdGVybWluYWwgLmJhc2gtdGl0bGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5yZWNvcmRpbmctbG9nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGNvdXJpZXIsIG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbn1cclxuXHJcbi5sb2ctcmVhZHkge1xyXG4gICAgY29sb3I6ICM0Q0FGNTA7XHJcbiAgICAvKiBWZXJkZSBlc2N1cm8vbGVnw612ZWwgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLmxvZy1yZWNvcmRpbmcge1xyXG4gICAgY29sb3I6ICNGRjk4MDA7XHJcbiAgICAvKiBMYXJhbmphICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmxvZy1kZXNjcmlwdGlvbiB7XHJcbiAgICBjb2xvcjogI0UwRTBFMDtcclxuICAgIC8qIEJyYW5jbyBjaW56YSBwYXJhIGxlaXR1cmEgKi9cclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuXHJcbi5sb2FkaW5nLWRvdHMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNGRjk4MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgYW5pbWF0aW9uOiBwdWxzYXIgMS4ycyBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2FyIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0bi1kb3dubG9hZC1sb2cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMmE2YztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICY6aG92ZXIsXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWEzYzhlO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjY2NjY2NjO1xyXG4gICAgfVxyXG5cclxuICAgIC5iaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmFjZXNzaWJsZS10ZXJtaW5hbCB7XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtIC4yNXJlbTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 1914:
/*!***********************************************************!*\
  !*** ./src/app/components/variable/variable.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VariableComponent": () => (/* binding */ VariableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _command_button_command_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../command-button/command-button.component */ 5888);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);






const _c0 = ["ngSelect"];
function VariableComponent_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "VARIABLE.INT"), " ");
} }
function VariableComponent_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "VARIABLE.REAL"), " ");
} }
function VariableComponent_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "VARIABLE.TEXT"), " ");
} }
function VariableComponent_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "VARIABLE.LOGIC"), " ");
} }
function VariableComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VariableComponent_div_1_span_2_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, VariableComponent_div_1_span_3_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, VariableComponent_div_1_span_4_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, VariableComponent_div_1_span_5_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u2039-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "variable-cod-" + ctx_r0.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.variable.type == "INTEGER");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.variable.type == "DOUBLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.variable.type == "STRING");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.variable.type == "BOOLEAN");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.variable.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 8, "GENERAL.RECEIVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.variable.value, ";");
} }
function VariableComponent_div_2_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VariableComponent_div_2_div_25_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.variable.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "variable-value-", ctx_r9.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, "GENERAL.VALUE_OF") + " " + ctx_r9.variable.name)("ngModel", ctx_r9.variable.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 6, "GENERAL.VALUE_OF") + " " + ctx_r9.variable.name);
} }
function VariableComponent_div_2_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VariableComponent_div_2_div_26_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.variable.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "variable-value-", ctx_r10.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, "GENERAL.VALUE_OF") + " " + ctx_r10.variable.name)("ngModel", ctx_r10.variable.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 6, "GENERAL.VALUE_OF") + " " + ctx_r10.variable.name);
} }
function VariableComponent_div_2_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VariableComponent_div_2_div_27_Template_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.variable.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "variable-value-", ctx_r11.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 7, "VARIABLE.TYPE"))("ngModel", ctx_r11.variable.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", "verdadeiro");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 9, "GENERAL.TRUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", "falso");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 11, "GENERAL.FALSE"));
} }
function VariableComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function VariableComponent_div_2_Template_select_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.changeType(); })("ngModelChange", function VariableComponent_div_2_Template_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.variable.type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 16)(17, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VariableComponent_div_2_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.variable.name = $event; })("keyup.enter", function VariableComponent_div_2_Template_input_keyup_enter_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.focusElement("variable-value-" + ctx_r22.index); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 23)(21, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, VariableComponent_div_2_div_25_Template, 4, 8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, VariableComponent_div_2_div_26_Template, 4, 8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, VariableComponent_div_2_div_27_Template, 9, 13, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "variable-type-" + ctx_r1.index)("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 16, "VARIABLE.TYPE"))("ngModel", ctx_r1.variable.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 18, "VARIABLE.INT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 20, "VARIABLE.REAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 22, "VARIABLE.TEXT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 24, "VARIABLE.LOGIC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "variable-name-", ctx_r1.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 26, "VARIABLE.NAME"))("ngModel", ctx_r1.variable.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 28, "VARIABLE.NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 30, "GENERAL.RECEIVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 32, "GENERAL.RECEIVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.variable.type == "INTEGER" || ctx_r1.variable.type == "DOUBLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.variable.type == "STRING");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.variable.type == "BOOLEAN");
} }
function VariableComponent_app_command_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-command-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function VariableComponent_app_command_button_5_Template_app_command_button_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", "inline")("text", false)("title", "COMANDS.TITLE")("components", ctx_r2.components)("variables", ctx_r2.variables);
} }
function VariableComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 32);
} }
function VariableComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 33);
} }
class VariableComponent {
    constructor() {
        this.text = true;
        this.hasToggle = true;
        this.components = [];
        this.variables = [];
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.isHidden = true;
    }
    ngOnInit() {
        this.focusElement(`variable-type-${this.index}`);
        // setTimeout(() => {
        //   this.ngSelect.focus();
        // }, 200);
    }
    removeVariable() {
        this.remove.emit(this.index);
    }
    focusElement(id) {
        setTimeout(() => {
            let operatorElement = document.getElementById(id);
            if (operatorElement) {
                operatorElement.focus();
            }
        }, 200);
    }
    changeType() {
        if (this.variable.type == "STRING") {
            this.variable.value = "";
        }
        else if (this.variable.type == "INTEGER" || this.variable.type == "DOUBLE") {
            this.variable.value = 0;
        }
        else {
            this.variable.value = "verdadeiro";
        }
        this.setStorage();
        // this.focusElement(`variable-name-${this.index}`)
    }
    toggleHidden() {
        this.isHidden = !this.isHidden;
        if (!this.isHidden) {
            setTimeout(() => {
                var _a;
                (_a = document.getElementById("variable-cod-" + this.index)) === null || _a === void 0 ? void 0 : _a.focus();
            }, 200);
        }
        else {
            setTimeout(() => {
                var _a;
                (_a = document.getElementById("variable-type-" + this.index)) === null || _a === void 0 ? void 0 : _a.focus();
            }, 200);
        }
    }
    setStorage() {
        this.change.emit();
    }
    onKeyUp(event) {
        if (event.code == "13") {
            alert(event);
            // this.focusOperator(this.operators.length - 1);
            // this.pressedAlt = false;
        }
    }
}
VariableComponent.ɵfac = function VariableComponent_Factory(t) { return new (t || VariableComponent)(); };
VariableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VariableComponent, selectors: [["app-variable"]], viewQuery: function VariableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ngSelect = _t.first);
    } }, hostBindings: function VariableComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function VariableComponent_keyup_HostBindingHandler($event) { return ctx.onKeyUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, inputs: { text: "text", title: "title", index: "index", hasToggle: "hasToggle", variable: "variable", components: "components", variables: "variables" }, outputs: { remove: "remove", change: "change" }, decls: 17, vars: 19, consts: [[1, "mb-2", "d-flex", "flex-wrap", "col-12", "align-items-center", "px-2", "py-1", "back", 3, "id"], ["class", "col-12 col-lg-9 d-flex justify-content-start align-items-center py-1", 4, "ngIf"], ["class", "row p-2 variable-item col-12 col-lg-9 g-2 align-items-center", 4, "ngIf"], [1, "col-12", "col-lg-3", "py-1"], [1, "d-flex", "justify-content-end", "align-items-center"], [3, "mode", "text", "title", "components", "variables", "change", 4, "ngIf"], [1, "btn", "btn-transparent", 3, "title", "click"], ["class", "bi bi-unlock-fill", "aria-hidden", "true", 4, "ngIf"], ["class", "bi bi-lock-fill", "aria-hidden", "true", 4, "ngIf"], [1, "btn", "btn-transparent", "text-danger", "pr-2", 3, "title", "click"], ["aria-hidden", "true"], [1, "col-12", "col-lg-9", "d-flex", "justify-content-start", "align-items-center", "py-1"], ["tabindex", "0", 1, "mb-0", 3, "id"], [4, "ngIf"], ["tabindex", "0", 1, "sr-only"], [1, "row", "p-2", "variable-item", "col-12", "col-lg-9", "g-2", "align-items-center"], [1, "col-12", "col-sm-6", "col-md-3"], ["name", "tipo", 1, "form-control", 3, "id", "title", "ngModel", "change", "ngModelChange"], ["value", "INTEGER"], ["value", "DOUBLE"], ["value", "STRING"], ["value", "BOOLEAN"], ["type", "text", 1, "form-control", 3, "id", "title", "ngModel", "ngModelChange", "keyup.enter"], [1, "col-12", "col-sm-2", "col-md-2", "d-flex", "align-items-center", "justify-content-start", "justify-content-sm-center"], ["for", "receive", "tabindex", "0", 3, "title"], ["class", "col-12 col-sm-10 col-md-4", 4, "ngIf"], [1, "col-12", "col-sm-10", "col-md-4"], ["type", "number", 1, "form-control", 3, "id", "title", "ngModel", "ngModelChange"], ["type", "text", "maxlength", "30", 1, "form-control", 3, "id", "title", "ngModel", "ngModelChange"], ["name", "tipo", 1, "form-control", 3, "id", "title", "ngModel", "ngModelChange"], [3, "ngValue"], [3, "mode", "text", "title", "components", "variables", "change"], ["aria-hidden", "true", 1, "bi", "bi-unlock-fill"], ["aria-hidden", "true", 1, "bi", "bi-lock-fill"]], template: function VariableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VariableComponent_div_1_Template, 15, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VariableComponent_div_2_Template, 28, 34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, VariableComponent_app_command_button_5_Template, 1, 5, "app-command-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VariableComponent_Template_button_click_6_listener() { return ctx.toggleHidden(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, VariableComponent_span_11_Template, 1, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, VariableComponent_span_12_Template, 1, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VariableComponent_Template_button_click_13_listener() { return ctx.removeVariable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "variable-" + ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.isHidden ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 13, "GENERAL.READ_CODE") : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 15, "GENERAL.READ_EDIT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.isHidden ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 9, "GENERAL.READ_CODE") : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 11, "GENERAL.READ_EDIT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 17, "GENERAL.READ_DELETE"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _command_button_command_button_component__WEBPACK_IMPORTED_MODULE_0__.CommandButtonComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".variable-item[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n}\n\n@media screen and (max-width: 768px) {\n  .variable-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .variable-item[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhcmlhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUVRO0lBQ0ksV0FBQTtFQUFWO0FBQ0YiLCJmaWxlIjoidmFyaWFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFyaWFibGUtaXRlbSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC52YXJpYWJsZS1pdGVtIHtcbiAgICAgICAgLmZvcm0tY29udHJvbCwgLmZvcm0tc2VsZWN0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 52:
/*!*****************************************************!*\
  !*** ./src/app/components/write/write.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WriteComponent": () => (/* binding */ WriteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _command_button_command_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../command-button/command-button.component */ 5888);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);






function WriteComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "p", 12)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "writer-cod-" + ctx_r0.idElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "GENERAL.WRITE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.writer.value, ";");
} }
function WriteComponent_div_2_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "GENERAL.SELECT"));
} }
function WriteComponent_div_2_select_13_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "WRITE.SELECT_OPERATION"));
} }
function WriteComponent_div_2_select_13_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", v_r11.value.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](v_r11.value.name);
} }
function WriteComponent_div_2_select_13_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "GENERAL.NOT_VARIABLE"));
} }
function WriteComponent_div_2_select_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WriteComponent_div_2_select_13_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.writer.value = $event; })("change", function WriteComponent_div_2_select_13_Template_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WriteComponent_div_2_select_13_option_1_Template, 3, 4, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, WriteComponent_div_2_select_13_option_2_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WriteComponent_div_2_select_13_option_3_Template, 3, 4, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.writer.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.variables.length && ctx_r6.writer.value == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.variables);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.variables.length && ctx_r6.writer.value == "");
} }
function WriteComponent_div_2_input_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WriteComponent_div_2_input_14_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.writer.value = $event; })("change", function WriteComponent_div_2_input_14_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r7.writer.value)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "GENERAL.DIGIT"));
} }
function WriteComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WriteComponent_div_2_Template_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.writer.type = $event; })("change", function WriteComponent_div_2_Template_select_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.changeType(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, WriteComponent_div_2_option_6_Template, 3, 4, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, WriteComponent_div_2_select_13_Template, 4, 4, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, WriteComponent_div_2_input_14_Template, 2, 4, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 11, "GENERAL.RECEIVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 13, "GENERAL.WRITE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "write-type-" + ctx_r1.idElement)("ngModel", ctx_r1.writer.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.writer.type == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", "VARIABLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 15, "GENERAL.VARIABLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", "TEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 17, "GENERAL.TEXT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.writer.type == "VARIABLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.writer.type == "TEXT");
} }
function WriteComponent_app_command_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-command-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function WriteComponent_app_command_button_5_Template_app_command_button_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.setStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", "inline")("text", false)("title", "Comandos")("components", ctx_r2.components)("variables", ctx_r2.variables);
} }
function WriteComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 25);
} }
function WriteComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 26);
} }
class WriteComponent {
    constructor() {
        this.isHidden = true;
        this.text = true;
        this.back = false;
        this.hasToggle = true;
        this.components = [];
        this.writer = {
            type: '',
            value: ''
        };
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        this.idElement = Math.floor(Math.random() * (this.index + 1) * 10000);
        setTimeout(() => {
            var _a;
            (_a = document.getElementById("write-type-" + this.idElement)) === null || _a === void 0 ? void 0 : _a.focus();
        }, 200);
    }
    changeType() {
        this.writer.value = '';
        this.change.emit();
    }
    setStorage() {
        this.change.emit();
    }
    toggleHidden() {
        this.isHidden = !this.isHidden;
        if (!this.isHidden) {
            setTimeout(() => {
                var _a;
                (_a = document.getElementById("writer-cod-" + this.idElement)) === null || _a === void 0 ? void 0 : _a.focus();
            }, 200);
        }
        else {
            setTimeout(() => {
                var _a;
                (_a = document.getElementById("write-type-" + this.idElement)) === null || _a === void 0 ? void 0 : _a.focus();
            }, 200);
        }
    }
    removeWriter() {
        this.remove.emit(this.index);
    }
}
WriteComponent.ɵfac = function WriteComponent_Factory(t) { return new (t || WriteComponent)(); };
WriteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WriteComponent, selectors: [["app-write"]], inputs: { text: "text", back: "back", title: "title", index: "index", hasToggle: "hasToggle", components: "components", variables: "variables", writer: "writer" }, outputs: { remove: "remove", change: "change" }, decls: 17, vars: 19, consts: [[1, "mb-2", "d-flex", "flex-wrap", "col-12", "align-items-center", "px-3", "py-2", "back", "write", 3, "ngClass"], ["class", "col-12 col-lg-9 d-flex justify-content-start align-items-center py-1", 4, "ngIf"], ["class", "col-12 col-lg-9 d-flex flex-wrap align-items-center gap-2 py-1", 4, "ngIf"], [1, "col-12", "col-lg-3", "py-1"], [1, "d-flex", "justify-content-end", "align-items-center"], [3, "mode", "text", "title", "components", "variables", "change", 4, "ngIf"], [1, "btn", "btn-transparent", 3, "title", "click"], ["class", "bi bi-unlock-fill", "aria-hidden", "true", 4, "ngIf"], ["class", "bi bi-lock-fill", "aria-hidden", "true", 4, "ngIf"], [1, "btn", "btn-transparent", "text-danger", "pr-2", 3, "title", "click"], ["aria-hidden", "true"], [1, "col-12", "col-lg-9", "d-flex", "justify-content-start", "align-items-center", "py-1"], ["tabindex", "0", 1, "mb-0", 3, "id"], [1, "col-12", "col-lg-9", "d-flex", "flex-wrap", "align-items-center", "gap-2", "py-1"], ["for", "receive", "tabindex", "0", 1, "me-1", 3, "title"], [1, "form-select", "write-select", 3, "id", "ngModel", "ngModelChange", "change"], ["disabled", "", 3, "ngValue", 4, "ngIf"], [3, "ngValue"], ["class", "form-select write-select", 3, "ngModel", "ngModelChange", "change", 4, "ngIf"], ["class", "form-control write-input", "type", "text", 3, "ngModel", "placeholder", "ngModelChange", "change", 4, "ngIf"], ["disabled", "", 3, "ngValue"], [1, "form-select", "write-select", 3, "ngModel", "ngModelChange", "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", 1, "form-control", "write-input", 3, "ngModel", "placeholder", "ngModelChange", "change"], [3, "mode", "text", "title", "components", "variables", "change"], ["aria-hidden", "true", 1, "bi", "bi-unlock-fill"], ["aria-hidden", "true", 1, "bi", "bi-lock-fill"]], template: function WriteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WriteComponent_div_1_Template, 7, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, WriteComponent_div_2_Template, 15, 19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, WriteComponent_app_command_button_5_Template, 1, 5, "app-command-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WriteComponent_Template_button_click_6_listener() { return ctx.toggleHidden(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, WriteComponent_span_11_Template, 1, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, WriteComponent_span_12_Template, 1, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WriteComponent_Template_button_click_13_listener() { return ctx.removeWriter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.back == true ? "new-back" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.isHidden ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 13, "GENERAL.READ_CODE") : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 15, "GENERAL.READ_EDIT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.isHidden ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 9, "GENERAL.READ_CODE") : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 11, "GENERAL.READ_EDIT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 17, "GENERAL.REMOVE_COMANDS"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _command_button_command_button_component__WEBPACK_IMPORTED_MODULE_0__.CommandButtonComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".new-back[_ngcontent-%COMP%] {\n  background-color: #ffb0dd;\n}\n\n.left[_ngcontent-%COMP%] {\n  margin-left: 9px;\n}\n\n.write-select[_ngcontent-%COMP%], .write-input[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 140px;\n}\n\n@media screen and (max-width: 576px) {\n  .write-select[_ngcontent-%COMP%], .write-input[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyaXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGVBQUE7RUFFTjtBQUNGIiwiZmlsZSI6IndyaXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1iYWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjBkZDtcclxufVxyXG4ubGVmdHtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi53cml0ZS1zZWxlY3QsIC53cml0ZS1pbnB1dCB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1pbi13aWR0aDogMTQwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAud3JpdGUtc2VsZWN0LCAud3JpdGUtaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyIl19 */"] });


/***/ }),

/***/ 3667:
/*!***********************************************!*\
  !*** ./src/app/core/database/app-database.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppDatabase": () => (/* binding */ AppDatabase),
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dexie */ 6044);

class AppDatabase extends dexie__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super('AppDatabase');
        // Define a versão do banco de dados e os índices (o que será buscado/filtrado)
        this.version(1).stores({
            logs: '++id, dataHoraInicio, dataHoraFim, execucoes' // '++' para autoIncrement
        });
    }
}
// Cria uma única instância (Singleton) para ser usada em toda a aplicação
const db = new AppDatabase();


/***/ }),

/***/ 3351:
/*!*************************************!*\
  !*** ./src/app/enums/types.enum.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypesEnum": () => (/* binding */ TypesEnum)
/* harmony export */ });
var TypesEnum;
(function (TypesEnum) {
    TypesEnum["VARIABLE"] = "VARIABLE";
    TypesEnum["OPERATOR"] = "OPERATOR";
    TypesEnum["WRITER"] = "WRITER";
    TypesEnum["CONDITIONAL"] = "CONDITIONAL";
    TypesEnum["FOR_CODITIONAL"] = "FOR_CODITIONAL";
})(TypesEnum || (TypesEnum = {}));


/***/ }),

/***/ 189:
/*!**************************************************************!*\
  !*** ./src/app/features/logs/services/log-export.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogExportService": () => (/* binding */ LogExportService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _utils_date_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/date.utils */ 4945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class LogExportService {
    constructor(document) {
        this.document = document;
    }
    formatarExecucoes(execucoes) {
        let txt = "";
        const separador = "\n===================================\n\n";
        execucoes.forEach((execucao, index) => {
            txt += separador;
            txt += `Compilação ${index + 1}: ${(0,_utils_date_utils__WEBPACK_IMPORTED_MODULE_0__.formatarDataHoraPadrao)(execucao.timestamp)}\n\n`;
            txt += `Código:\n${execucao.codigo}\n\n`;
            txt += `Saída:\n${execucao.saida}\n\n`;
        });
        txt += separador;
        return txt;
    }
    getNomeArquivo(dataHoraInicio, dataHoraFim) {
        const dataInicioFormatada = (0,_utils_date_utils__WEBPACK_IMPORTED_MODULE_0__.formatarDataHoraPadrao)(dataHoraInicio);
        const dataFimFormatada = (0,_utils_date_utils__WEBPACK_IMPORTED_MODULE_0__.formatarDataHoraPadrao)(dataHoraFim !== null && dataHoraFim !== void 0 ? dataHoraFim : new Date());
        return `log-${dataInicioFormatada}-a-${dataFimFormatada}.txt`.replace(/\s/g, "");
    }
    exportLogTxt(log) {
        var _a, _b, _c;
        if (!log)
            return;
        const dataInicio = (0,_utils_date_utils__WEBPACK_IMPORTED_MODULE_0__.formatarDataHoraPadrao)(log.dataHoraInicio);
        const dataFim = (0,_utils_date_utils__WEBPACK_IMPORTED_MODULE_0__.formatarDataHoraPadrao)(log.dataHoraFim);
        const tempoTotal = (0,_utils_date_utils__WEBPACK_IMPORTED_MODULE_0__.tempoTotalEmMinutosSegundos)(log.dataHoraInicio, (_a = log.dataHoraFim) !== null && _a !== void 0 ? _a : new Date());
        let txt = `Data Início: ${dataInicio}\n`;
        txt += `Data Fim: ${dataFim}\n`;
        txt += `Tempo total: ${tempoTotal}\n`;
        txt += `Quantidade de Compilações: ${log.execucoes.length}\n`;
        txt += `Versão Final do Código:${(_c = (_b = log.execucoes[log.execucoes.length - 1]) === null || _b === void 0 ? void 0 : _b.codigo) !== null && _c !== void 0 ? _c : ''}\n\n`;
        txt += `Compilações:\n${this.formatarExecucoes(log.execucoes)}\n`;
        const nomeArquivo = this.getNomeArquivo(log.dataHoraInicio, log.dataHoraFim);
        this.downloadTxtFile(nomeArquivo, txt);
    }
    downloadTxtFile(nomeArquivo, conteudo) {
        const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const a = this.document.createElement('a');
        a.href = url;
        a.download = nomeArquivo;
        this.document.body.appendChild(a);
        a.click();
        this.document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }
}
LogExportService.ɵfac = function LogExportService_Factory(t) { return new (t || LogExportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT)); };
LogExportService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LogExportService, factory: LogExportService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1703:
/*!*******************************************************!*\
  !*** ./src/app/features/logs/services/log.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogService": () => (/* binding */ LogService)
/* harmony export */ });
/* harmony import */ var _home_lucas_Documentos_ufc_semestre_10_tcc_VProgForms_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _core_database_app_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/database/app-database */ 3667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class LogService {
  // Retorna um Observable do RxJS, ótimo para o Angular
  obterLogs() {
    return (0,_home_lucas_Documentos_ufc_semestre_10_tcc_VProgForms_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // liveQuery atualiza os dados automaticamente se houver mudanças no IndexedDB
      return yield _core_database_app_database__WEBPACK_IMPORTED_MODULE_1__.db.logs.toArray();
    })();
  }

  adicionarLog(log) {
    return (0,_home_lucas_Documentos_ufc_semestre_10_tcc_VProgForms_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const id = yield _core_database_app_database__WEBPACK_IMPORTED_MODULE_1__.db.logs.add(log);
      return id;
    })();
  }

  atualizarLog(id, mudancas) {
    return (0,_home_lucas_Documentos_ufc_semestre_10_tcc_VProgForms_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _core_database_app_database__WEBPACK_IMPORTED_MODULE_1__.db.logs.update(id, mudancas);
    })();
  }

  adicionarExecucao(id, execucao) {
    return (0,_home_lucas_Documentos_ufc_semestre_10_tcc_VProgForms_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const log = yield _core_database_app_database__WEBPACK_IMPORTED_MODULE_1__.db.logs.get(id);

      if (log) {
        log.execucoes.push(execucao);
        yield _core_database_app_database__WEBPACK_IMPORTED_MODULE_1__.db.logs.update(id, {
          execucoes: log.execucoes
        });
      }
    })();
  }

  deletarLog(id) {
    return (0,_home_lucas_Documentos_ufc_semestre_10_tcc_VProgForms_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _core_database_app_database__WEBPACK_IMPORTED_MODULE_1__.db.logs["delete"](id);
    })();
  }

  exportLog(id) {
    return (0,_home_lucas_Documentos_ufc_semestre_10_tcc_VProgForms_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _core_database_app_database__WEBPACK_IMPORTED_MODULE_1__.db.logs.get(id);
    })();
  }

}

LogService.ɵfac = function LogService_Factory(t) {
  return new (t || LogService)();
};

LogService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: LogService,
  factory: LogService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6584:
/*!***********************************************!*\
  !*** ./src/app/pipes/accessible-math.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessibleMathPipe": () => (/* binding */ AccessibleMathPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 3935);


class AccessibleMathPipe {
    constructor(translate) {
        this.translate = translate;
    }
    transform(value) {
        if (!value)
            return '';
        let res = value;
        const getSpan = (symbol, translationKey) => {
            return `<span aria-hidden="true">${symbol}</span><span class="sr-only"> ${this.translate.instant(translationKey)} </span>`;
        };
        res = res.replace(/>=/g, getSpan('>=', 'ACCESSIBLE_MATH.GREATER_EQUAL'));
        res = res.replace(/<=/g, getSpan('<=', 'ACCESSIBLE_MATH.LESS_EQUAL'));
        res = res.replace(/==/g, getSpan('==', 'ACCESSIBLE_MATH.EQUAL'));
        res = res.replace(/!=/g, getSpan('!=', 'ACCESSIBLE_MATH.NOT_EQUAL'));
        res = res.replace(/<-/g, getSpan('<-', 'ACCESSIBLE_MATH.RECEIVE'));
        res = res.replace(/>/g, getSpan('>', 'ACCESSIBLE_MATH.GREATER'));
        res = res.replace(/</g, getSpan('<', 'ACCESSIBLE_MATH.LESS'));
        res = res.replace(/\*/g, getSpan('*', 'ACCESSIBLE_MATH.MULTIPLY'));
        res = res.replace(/\//g, getSpan('/', 'ACCESSIBLE_MATH.DIVIDE'));
        res = res.replace(/\+/g, getSpan('+', 'ACCESSIBLE_MATH.ADD'));
        res = res.replace(/\-/g, getSpan('-', 'ACCESSIBLE_MATH.SUBTRACT'));
        res = res.replace(/;/g, getSpan(';', 'ACCESSIBLE_MATH.SEMICOLON'));
        return res;
    }
}
AccessibleMathPipe.ɵfac = function AccessibleMathPipe_Factory(t) { return new (t || AccessibleMathPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService, 16)); };
AccessibleMathPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "accessibleMath", type: AccessibleMathPipe, pure: false });


/***/ }),

/***/ 4945:
/*!*************************************!*\
  !*** ./src/app/utils/date.utils.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatarDataHoraPadrao": () => (/* binding */ formatarDataHoraPadrao),
/* harmony export */   "tempoTotalEmMinutosSegundos": () => (/* binding */ tempoTotalEmMinutosSegundos)
/* harmony export */ });
function tempoTotalEmMinutosSegundos(dataInicio, dataFim) {
    const diff = dataFim.getTime() - dataInicio.getTime();
    const minutos = Math.floor(diff / (1000 * 60));
    const segundos = Math.floor((diff / 1000) % 60);
    const minutosSufixo = minutos === 1 ? "minuto" : "minutos";
    const segundosSufixo = segundos === 1 ? "segundo" : "segundos";
    return minutos + " " + minutosSufixo + " e " + segundos + " " + segundosSufixo;
}
function formatarDataHoraPadrao(data) {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    const hora = data.getHours().toString().padStart(2, '0');
    const minuto = data.getMinutes().toString().padStart(2, '0');
    const segundo = data.getSeconds().toString().padStart(2, '0');
    return `${dia}/${mes}/${ano} - ${hora}:${minuto}:${segundo}`;
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map