import pandas as pd
import sys

cols = [
    "work_year",
    "experience_level",
    "employment_type",
    "job_title",
    "salary_in_usd",
    "employee_residence",
    "remote_ratio",
    "company_location",
    "company_size",
]


def main(filename):
    iter_csv = pd.read_csv(filename)

    year = None
    el = None
    et = None
    et = None
    jt = None
    s = None
    er = None
    rr = None
    cl = None
    cs = None
    rows = None

    if (len(sys.argv) >= 2):
        
        args = sys.argv[1]
        
        args = args.split(",")
        print(args)
        year = args[0]
        el = [args[1]]
        et = [args[2]]
        jt = [args[3]]
        s = args[4]
        er = [args[5]]
        rr = args[6]
        cl = [args[7]]
        cs = [args[8]]
        rows = args[9]

    if year == 'None':
        year = []
    else:
        year = [int(year)]
    
    if el == ['None']:
        el = []
    
    if et == ['None']:
        et = []
    
    if jt == ['None']:
        jt = []
    
    if s == 'None':
        s = []
    else:
        s = [int(s)]
    
    if er == ['None']:
        er = []
      
    if rr == 'None':
        rr = []
    else:
        rr = [int(rr)]
   
    if cl == ['None']:
        cl = []
    
    if cs == ['None']:
        cs = []

    if rows == "None":
        rows = 100
    else:
        rows = int(rows)


    WorkYear = parse_data(iter_csv, year, 0)
    ExperienceLevel = parse_data(iter_csv, el, 1)
    EmploymentType = parse_data(iter_csv, et, 2)
    JobTitle = parse_data(iter_csv, jt, 3)
    Salary = parse_salary(iter_csv, s, 4)
    EmployeeResidence = parse_data(iter_csv, er, 5)
    RemoteRatio = parse_data(iter_csv, rr, 6)
    CompanyLocation = parse_data(iter_csv, cl, 7)
    CompanySize = parse_data(iter_csv, cs, 8)

    result = pd.concat(
        [
            WorkYear,
            ExperienceLevel,
            EmploymentType,
            JobTitle,
            Salary,
            EmployeeResidence,
            RemoteRatio,
            CompanyLocation,
            CompanySize,
        ],
        axis=1,
        join="inner",
    )

    result = result.loc[:, ~result.columns.duplicated()]
    result = result[:rows]
    return result


def parse_data(file, element_filter, element):
    col = cols[element]
    if element_filter:
        filter = file[col].isin(element_filter)
        filter_res = file[filter]

        return filter_res
    else:
        return file


def parse_salary(file, element_filter, element):
    col = cols[element]
    if element_filter:
        filter = file[col] > int(element_filter[0])
        filter_res = file[filter]

        return filter_res
    else:
        return file
    
if(__name__ == "__main__"):
    data = main("./routes/python/ds_salaries.csv")
    data.to_csv(sys.stdout, sep=",", index=False, header=None)