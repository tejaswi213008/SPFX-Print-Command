import IPrintTemplate from "./print-template";

export default interface IPrintDialogContentState {
    hideLoading: boolean;
    loadingMessage: string;
    templates: any[];
    items:any[];
    showPanel:boolean;
    hideTemplateLoading:boolean;
    printTemplate: IPrintTemplate;
    itemContent:any;
    /** HTML values of rich text (multi line) fields, keyed by the same encoded internal name used in itemContent */
    richTextContent:{ [fieldName: string]: string };
    selectedTemplateIndex:number;
    isSiteAdmin:boolean;
}