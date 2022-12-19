const questions = [
    {
        id : 1,
        name : '以下哪些不属于HTML标签',
        type : 'single',
        options : [
            {
                key : 'A',
                value : 'div'
            },
            {
                key : 'B',
                value : 'a'
            },
            {
                key : 'C',
                value : 'value'
            },
            {
                key : 'D',
                value : 'strong'
            }
        ],
        answer : ['C']
    },
    {
        id : 2,
        name : '以下哪些元素属于块级元素',
        type : 'multiple',
        options : [
            {
                key : 'A',
                value : 'div'
            },
            {
                key : 'B',
                value : 'a'
            },
            {
                key : 'C',
                value : 'input'
            },
            {
                key : 'D',
                value : 'strong'
            }
        ],
        answer : ['A','C']
    },
    {
        id : 3,
        name : '以下对JavaScript描述正确的是',
        type : 'single',
        options : [
            {
                key : 'A',
                value : 'JavaScript和Java是同一个语言'
            },
            {
                key : 'B',
                value : 'JavaScript是Web页面中的一种脚本语言'
            },
            {
                key : 'C',
                value : 'JavaScript必须编译才能运行'
            },
            {
                key : 'D',
                value : 'JavaScript能在任何版本的浏览器运行'
            }
        ],
        answer : ['B']
    },
    {
        id : 4,
        name : '以下哪条语句会产生运行错误',
        type : 'single',
        options : [
            {
                key : 'A',
                value : 'var obj = ();'
            },
            {
                key : 'B',
                value : 'var obj = [];'
            },
            {
                key : 'C',
                value : 'var obj = {};'
            },
            {
                key : 'D',
                value : 'var obj = //;'
            }
        ],
        answer : ['A']
    },
    {
        id : 5,
        name : '以下哪个单词不属于javascript保留字',
        type : 'single',
        options : [
            {
                key : 'A',
                value : 'with'
            },
            {
                key : 'B',
                value : 'class'
            },
            {
                key : 'C',
                value : 'void'
            },
            {
                key : 'D',
                value : 'parent'
            }
        ],
        answer : ['D']
    },
    {
        id : 6,
        name : '以下哪个表达式的结果为true',
        type : 'single',
        options : [
            {
                key : 'A',
                value : 'null instanceof Object'
            },
            {
                key : 'B',
                value : 'null === undefined'
            },
            {
                key : 'C',
                value : 'null == undefined'
            },
            {
                key : 'D',
                value : 'NaN == NaN'
            }
        ],
        answer : ['C']
    },
    {
        id : 7,
        name : '下面有关 CSS 选择器的说法错误的是',
        type : 'single',
        options : [
            {
                key : 'A',
                value : '.intro --- 选择 class="intro" 的所有元素'
            },
            {
                key : 'B',
                value : '#firstname --- 选择 id="firstname"的元素'
            },
            {
                key : 'C',
                value : 'div>p --- 选择所有 <div> 元素和所有 <p> 元素'
            },
            {
                key : 'D',
                value : 'p --- 选择所有 <p> 元素'
            }
        ],
        answer : ['C']
    },
    {
        id : 8,
        name : 'Canvas 能够使用___绘制 2D 图形',
        type : 'single',
        options : [
            {
                key : 'A',
                value : 'XML'
            },
            {
                key : 'B',
                value : 'HTML'
            },
            {
                key : 'C',
                value : 'JavaScript'
            },
            {
                key : 'D',
                value : 'XHTML'
            }
        ],
        answer : ['C']
    },
    {
        id : 9,
        name : '关于标签，下列说法错误的是',
        type : 'single',
        options : [
            {
                key : 'A',
                value : '<video> 标签中 controls 属性决定是否向用户显示控件'
            },
            {
                key : 'B',
                value : '<audio> 与 </audio> 之间插入的内容是用来解释控件的'
            },
            {
                key : 'C',
                value : '<datalist> 标签可以和 input 标签配合进行使用，来显示列表'
            },
            {
                key : 'D',
                value : '<progress> 标签不填写 max 和 value 会自动滑动'
            }
        ],
        answer : ['B']
    },
    {
        id : 10,
        name : '用 CSS 设置 div 的上边框为红色实线，下面设置正确的是',
        type : 'single',
        options : [
            {
                key : 'A',
                value : 'style="border-top: 1px #ff0000 solid;"'
            },
            {
                key : 'B',
                value : 'style="border-top: 1px #ff0000 dashed;"'
            },
            {
                key : 'C',
                value : 'style="border-top: 1px #ff0000 dashed;"'
            },
            {
                key : 'D',
                value : 'style="border-top: 1px, #ff0000, solid;"'
            }
        ],
        answer : ['A']
    },
    {
        id : 11,
        name : 'typeof Date.now() 的值是',
        type : 'single',
        options : [
            {
                key : 'A',
                value : 'date'
            },
            {
                key : 'B',
                value : 'object'
            },
            {
                key : 'C',
                value : 'number'
            },
            {
                key : 'D',
                value : 'error'
            }
        ],
        answer : ['C']
    },
    {
        id : 12,
        name : '下面哪些方法可以实现在jQuery中通过远程HTTP的GET请求载入信息',
        type : 'multiple',
        options : [
            {
                key : 'A',
                value : '$.ajax(opts)'
            },
            {
                key : 'B',
                value : 'load(url)'
            },
            {
                key : 'C',
                value : '$.get(url)'
            },
            {
                key : 'D',
                value : 'getScript(url)'
            }
        ],
        answer : ['A','C']
    },
    {
        id : 13,
        name : '下面哪一个是JSON数据',
        type : 'single',
        options : [
            {
                key : 'A',
                value :'{name:"xiaoming",age,"student"}'
            },
            {
                key : 'B',
                value : '{"name":"xiaoming","age":"student"}'
            },
            {
                key : 'C',
                value : '{"xiaoming","student"}'
            },
            {
                key : 'D',
                value : '["xiaoming","student"]'
            }
        ],
        answer : ['B']
    },
    {
        id : 14,
        name : '下列不属于JavaScript内置对象的是',
        type : 'single',
        options : [
            {
                key : 'A',
                value :'Math'
            },
            {
                key : 'B',
                value : 'Date'
            },
            {
                key : 'C',
                value : 'RegExp'
            },
            {
                key : 'D',
                value : 'Window'
            },
            {
                key : 'E',
                value : 'Error'
            }
        ],
        answer : ['D']
    },
    {
        id : 14,
        name : '以下哪些表达式的结果为true',
        type : 'multiple',
        options : [
            {
                key : 'A',
                value :'undefined == null'
            },
            {
                key : 'B',
                value : 'isNaN("100")'
            },
            {
                key : 'C',
                value : 'parseInt("1a") === 1'
            },
            {
                key : 'D',
                value : '[] instanceof Array'
            }
        ],
        answer : ['A','B','D']
    },
    {
        id : 15,
        name : '下列代码中，页面打开后能够弹出1的是',
        type : 'multiple',
        options : [
            {
                key : 'A',
                value :'<iframe src=”javascript: alert(1)”></iframe>'
            },
            {
                key : 'B',
                value : '<img src=”” onerror=”alert(1)”/>'
            },
            {
                key : 'C',
                value : 'IE下<s style=”top:expression(alert(1))”></s>'
            },
            {
                key : 'D',
                value : '<div onclick=”alert(1)”></div>'
            }
        ],
        answer : ['A','B','C']
    },
]

export default questions