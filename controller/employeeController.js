import Employee from "../model/employeeModel.js"

export const create = async (req, res) => {
    try {
        const { userName } = req.body

        if (!userName) {
            return res.status(400).json({ message: "userName is required" })
        }

        const employeeExist = await Employee.findOne({ userName })

        if (employeeExist) {
            return res.status(409).json({ message: "Employee already exists." })
        }

        const employeeData = new Employee(req.body)
        const savedEmployee = await employeeData.save()

        return res.status(201).json(savedEmployee)
    } catch (error) {
        console.error("create employee error:", error)
        return res.status(500).json({ error: "Internal Server Error" })
    }
}


export const fetch = async (req, res) => {
    try {
        //res.json("Hello World")
        const employees = await Employee.find()
        if(employees.length === 0){
            return  res.status(404).json({message: "No employees found"})
        }
        res.status(200).json(employees)
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}