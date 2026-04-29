import * as React from 'react';
import styles from './print-template-content.module.scss';
import IPrintTemplateProps from './print-template-props';


class PrintTemplateContent extends React.Component<IPrintTemplateProps, {}>{

    constructor(props: IPrintTemplateProps | Readonly<IPrintTemplateProps>) {
        super(props);
    }
    public render() {
        return (
            <div className={styles.Print}>
                {this.props.template &&
                    <div className={styles.Print}>
                        <div className={styles.printHeader} dangerouslySetInnerHTML={{ __html: this.props.template.header || '' }} />
                        <div className={styles.printContent}>
                            {
                                this.props.template.content
                            }
                        </div>
                        <div className={styles.printFooter} dangerouslySetInnerHTML={{ __html: this.props.template.footer || '' }} />

                    </div>
                }
            </div>
        );
    }

}

export default PrintTemplateContent;