import '@sitecore-feaas/clientside';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  FEAASComponentHTML: Field<string>;
}

export type RichTextProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: RichTextProps): JSX.Element => {
  const HTML = props.params?.FEAASComponentHTML;
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component rich-text ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="component-content">
        {HTML ? (
          <div dangerouslySetInnerHTML={{ __html: HTML }} />
        ) : (
          <>
            <h2>Unconfigured Component</h2>
            <p>Click to choose from the library</p>
          </>
        )}
      </div>
    </div>
  );
};
