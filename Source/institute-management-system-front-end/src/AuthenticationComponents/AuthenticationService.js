import Cookies from 'universal-cookie';

class AuthenticationService{

    registerSuccessfulAdminLogin(admin)//Registers admin login
    {
        console.log("Register successful login");
        sessionStorage.setItem('authenticatedAdmin',admin);
    }

    
    registerSuccessfulTeacherLogin(teacher)//Registers agency login
    {
        console.log("Register successful teacher login");
        console.log(teacher);
        sessionStorage.setItem('authenticatedTeacher',teacher);
        const cookies = new Cookies();
        cookies.set('teacher-id', teacher, { path: '/' });
    }

    
    registerSuccessfulStudentLogin(Student)//Registers agency login
    {
        console.log("Register successful Student login");
        console.log(Student);
        sessionStorage.setItem('authenticatedStudent',Student);
        const cookies = new Cookies();
        cookies.set('Student', Student, { path: '/' });
    }

    isAdminLoggedIn()//Return true if admin is logged in
    { 
        let user = sessionStorage.getItem('authenticatedAdmin');
        return user === null ? false : true ;
    }

    isTeacherLoggedIn()//Return true if agency is logged in
    { 
        let user = sessionStorage.getItem('authenticatedTeacher');
        return user === null ? false : true ;
    }

    isStudentLoggedIn()//Return true if agency is logged in
    { 
        let user = sessionStorage.getItem('authenticatedStudent');
        return user === null ? false : true ;
    }


    adminLogout()//Removes admin entity
    {
        sessionStorage.removeItem('authenticatedAdmin');
    }

    teacherLogout()//Removes agency entity
    {
        sessionStorage.removeItem('authenticatedTeacher');
    }

    studentLogout()//Removes agency entity
    {
        sessionStorage.removeItem('authenticatedStudent');
    }

    // logout()
    // {
    //     sessionStorage.removeItem('authenticatedUser');
    // } 
    
    // logoutAdmin()
    // {
    //     sessionStorage.removeItem('authenticatedUser');
    // }

    
    // isUserLoggedIn()
    // { 
    //     let user = sessionStorage.getItem('authenticatedUser');
    //     return user === null ? false : true ;
    // }

    //  getLoggedinUsername()
    //  {
    //      return sessionStorage.getItem('authenticatedUser');;
    //  }

    getLoggedinTeacher()
    {
        let currentTeacher = sessionStorage.getItem('authenticatedTeacher');
        console.log(currentTeacher);
    }

}

export default new AuthenticationService(); 