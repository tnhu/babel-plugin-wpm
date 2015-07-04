export default function ({ Plugin, types: t }) {
  const visitor = {
    Property: {
      exit(node, parent, scope) {
        if (parent.type === 'ObjectExpression') {
          var counter = 0;
          var classParent = this.findParent(function (p) {
            counter++;
            return p.type === 'CallExpression' && p.get('callee').node.name === 'Class';
          });

          if (classParent && counter === 3) {
            var methodName = node.key.name;
            var firstChar = methodName[0];

            if (firstChar >= 'A' && firstChar <= 'Z') {
              node.key = t.identifier('constructor');
              node.value.id = t.identifier(methodName);
            }
          }
        }
      }
    }
  };

  return new Plugin('babel-plugin-wpm', {
    visitor,
    metadata: {
      group: 'builtin-pre'
    }
  });
};
