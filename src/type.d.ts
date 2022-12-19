/**
 *   题目类型
*/

interface QuestionType {
    id : number,
    name : string,
    type : string,
    options : OptionType[],
    answer : string[]
}

type checkType = "single | multiple"

interface OptionType  {
    key : string,
    value : string
}