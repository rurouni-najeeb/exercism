export class GradeSchool {
  _roster : Map<number, string[]>;
  _grades : number[];

  constructor(){
    this._roster = new Map<number, string[]>;
    this._grades = [];
  }

  roster(grade : number = -1) : Map<number, string[]> | string[]{
    if(grade === -1){
      let roster = new Map<number, string[]>();
      this._grades.forEach((element) => { 
        roster.set(element, this._roster.get(element)!);
      })
      return roster;
    }
    return this._roster.get(grade);
  }

  add(name: string, grade: number) {
    if(this._roster.has(grade)){
      let ptr: number = 0;
      let students : string[] = this._roster.get(grade)!;
      while(ptr < students.length && students[ptr] < name)
        ptr += 1;
      students.splice(ptr, 0, name);
      this._roster.set(grade, students);
    }
    else{
      this._roster.set(grade, [name]);
      this._grades = GradeSchool.add_grade(grade, this._grades);
    }
  }

  private static add_grade(grade : number, grades: number[]) : number[]{
    let ptr : number = 0;
    while(ptr < grades.length && grades[ptr] < grade)
      ptr++;
    grades.splice(ptr, 0, grade);
    return grades
  }

  grade() {
    throw new Error('Remove this statement and implement this function')
  }
}
