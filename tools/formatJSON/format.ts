// @ts-nocheck
/* eslint-disable */

/** 是否带引号 */
const QuoteKeys = true;

/** tab 缩进 */
const TAB = '  ';

function IsArray(obj) {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.length === 'number' &&
    !obj.propertyIsEnumerable('length')
  );
}

/** 格式化 json */
export function format(json: string): Promise<string> {
  let html = '';
  return new Promise((resolve, reject) => {
    try {
      if (json == '') {
        json = '""';
        return;
      }
      let obj = eval('[' + json + ']');
      html = ProcessObject(obj[0], 0, false, false, false);
      resolve("<PRE class='CodeContainer'>" + html + '</PRE>');
    } catch (e) {
      alert('JSON数据格式不正确:\n' + e.message);
      reject();
    }
  });
}

function ProcessObject(obj, indent, addComma, isArray, isPropertyContent) {
  const _dateObj = new Date();
  const _regexpObj = new RegExp();

  let html = '';
  let comma = addComma ? "<span class='Comma'>,</span> " : '';
  let type = typeof obj;
  if (IsArray(obj)) {
    if (obj.length == 0) {
      html += GetRow(
        indent,
        "<span class='ArrayBrace'>[ ]</span>" + comma,
        isPropertyContent,
      );
    } else {
      html += GetRow(
        indent,
        "<span class='ArrayBrace'>[</span>",
        isPropertyContent,
      );
      for (let i = 0; i < obj.length; i++) {
        html += ProcessObject(
          obj[i],
          indent + 1,
          i < obj.length - 1,
          true,
          false,
        );
      }
      html += GetRow(indent, "<span class='ArrayBrace'>]</span>" + comma);
    }
  } else if (type == 'object') {
    if (obj == null) {
      html += FormatLiteral('null', '', comma, indent, isArray, 'Null');
    } else if (obj.constructor == _dateObj.constructor) {
      html += FormatLiteral(
        'new Date(' + obj.getTime() + ') /*' + obj.toLocaleString() + '*/',
        '',
        comma,
        indent,
        isArray,
        'Date',
      );
    } else if (obj.constructor == _regexpObj.constructor) {
      html += FormatLiteral(
        'new RegExp(' + obj + ')',
        '',
        comma,
        indent,
        isArray,
        'RegExp',
      );
    } else {
      let numProps = 0;
      for (let prop in obj) numProps++;
      if (numProps == 0) {
        html += GetRow(
          indent,
          "<span class='ObjectBrace'>{ }</span>" + comma,
          isPropertyContent,
        );
      } else {
        html += GetRow(
          indent,
          "<span class='ObjectBrace'>{</span>",
          isPropertyContent,
        );

        let j = 0;

        for (let prop in obj) {
          let quote = QuoteKeys ? '"' : '';

          html += GetRow(
            indent + 1,
            "<span class='PropertyName'>" +
              quote +
              prop +
              quote +
              '</span>: ' +
              ProcessObject(obj[prop], indent + 1, ++j < numProps, false, true),
          );
        }

        html += GetRow(indent, "<span class='ObjectBrace'>}</span>" + comma);
      }
    }
  } else if (type == 'number') {
    html += FormatLiteral(obj, '', comma, indent, isArray, 'Number');
  } else if (type == 'boolean') {
    html += FormatLiteral(obj, '', comma, indent, isArray, 'Boolean');
  } else if (type == 'function') {
    if (obj.constructor == _regexpObj.constructor) {
      html += FormatLiteral(
        'new RegExp(' + obj + ')',
        '',
        comma,
        indent,
        isArray,
        'RegExp',
      );
    } else {
      obj = FormatFunction(indent, obj);

      html += FormatLiteral(obj, '', comma, indent, isArray, 'Function');
    }
  } else if (type == 'undefined') {
    html += FormatLiteral('undefined', '', comma, indent, isArray, 'Null');
  } else {
    html += FormatLiteral(
      obj
        .toString()
        .split('\\')
        .join('\\\\')
        .split('"')
        .join('\\"'),
      '"',
      comma,
      indent,
      isArray,
      'String',
    );
  }

  return html;
}

function FormatLiteral(literal, quote, comma, indent, isArray, style) {
  if (typeof literal == 'string')
    literal = literal
      .split('<')
      .join('&lt;')
      .split('>')
      .join('&gt;');

  let str =
    "<span class='" +
    style +
    "'>" +
    quote +
    literal +
    quote +
    comma +
    '</span>';

  if (isArray) str = GetRow(indent, str);

  return str;
}

function FormatFunction(indent, obj) {
  let tabs = '';

  for (let i = 0; i < indent; i++) tabs += TAB;

  let funcStrArray = obj.toString().split('\n');

  let str = '';

  for (let i = 0; i < funcStrArray.length; i++) {
    str += (i == 0 ? '' : tabs) + funcStrArray[i] + '\n';
  }

  return str;
}

function GetRow(indent, data, isPropertyContent) {
  let tabs = '';

  for (let i = 0; i < indent && !isPropertyContent; i++) tabs += TAB;

  if (data != null && data.length > 0 && data.charAt(data.length - 1) != '\n')
    data = data + '\n';

  return tabs + data;
}

function TabSizeChanged() {
  format();
}
function MultiplyString(num, str) {
  let sb = [];

  for (let i = 0; i < num; i++) {
    sb.push(str);
  }

  return sb.join('');
}
