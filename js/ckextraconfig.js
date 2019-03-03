CKEDITOR.editorConfig = function( config )
{
  config.forcePasteAsPlainText = true;
  config.stylesSet = [
    {
      'name': 'Block Grid: 2',
      'element': 'ul',
      'attributes': {'class': 'block-grid two-up'}
    },
    {
      'name': 'Block Grid: 3',
      'element': 'ul',
      'attributes': {'class': 'block-grid three-up'}
    },
    {
      'name': 'Block Grid: 4',
      'element': 'ul',
      'attributes': {'class': 'block-grid four-up'}
    },
    {
      'name': 'Block Grid: 5',
      'element': 'ul',
      'attributes': {'class': 'block-grid five-up'}
    }
  ];
};