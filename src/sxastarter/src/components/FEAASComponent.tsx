import '@sitecore-feaas/clientside';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  ComponentHTML: Field<string>;
}

export type RichTextProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: RichTextProps): JSX.Element => {
  const HTML =
    props.params?.HTML ||
    `<feaas-component
      library='org_VScskP0sU8VkXjv0-componentstadc5'
      component='wvleE6rXs2'
      version='Ttgk-XD0-r'
      revision='staged'
      hostname='https://feaascomponentsapiqa.blob.core.windows.net'
      data='{}'>
    </feaas-component>`;
  const text = HTML ? (
    <div dangerouslySetInnerHTML={{ __html: HTML }} />
  ) : (
    <span className="is-empty-hint">Rich text</span>
  );
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component rich-text ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="component-content">{text}</div>
    </div>
  );
};
