type rosterType = {
  [grade: number] : string[]
};

export class GradeSchool {
  _roster : rosterType
  _grades : number[];

  constructor(){
    this._roster = {};
    this._grades = [];
  }

  roster() : rosterType {
    let roster : rosterType = {};
    this._grades.forEach((element) => { 
      roster[element] = Object.assign([], this._roster[element]);
    })
    return roster;
  }

  add(name: string, grade: number) {
    let key = GradeSchool.findKey(name, this._roster)
    if(key !== -1){
      let students : string[] = this._roster[key];
      students.splice(students.indexOf(name), 1);
    }
    
    if(grade in this._roster){
      let ptr: number = 0;
      let students : string[] = this._roster[grade];
      while(ptr < students.length && students[ptr] < name)
        ptr += 1;
      students.splice(ptr, 0, name);
      this._roster[grade] = students;
    }
    else{
      this._roster[grade] = [name];
      this._grades = GradeSchool.add_grade(grade, this._grades);
    }
  }

  private static findKey(name: string, roster: rosterType) : number{
    for(const [key, value] of Object.entries(roster)){
      if(value.includes(name))
        return Number(key);
    }
    return -1;
  }

  private static add_grade(grade : number, grades: number[]) : number[]{
    let ptr : number = 0;
    while(ptr < grades.length && grades[ptr] < grade)
      ptr++;
    grades.splice(ptr, 0, grade);
    return grades
  }

  grade(item : number) : string[] {
    if(item in this._roster)
      return Object.assign([], this._roster[item]);
    else
      return [];
  }
}
