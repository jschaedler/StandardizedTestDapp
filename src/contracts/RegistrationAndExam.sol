// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract Register {
    uint256 testTaker = 0;

    struct Student {
        uint256 id;
        string photoHash;
        string name;
        string StreetAddress;
        bool valid;
    }

    mapping(uint256 => Student) public students;

    function register(
        string memory _ssn,
        string memory _name,
        string memory _streetAddress
    ) public {
        testTaker++;
        bool tempValid = true;

        for (uint256 i = 1; i <= testTaker; i++) {
            if (
                keccak256(abi.encodePacked(students[i].photoHash)) ==
                keccak256(abi.encodePacked(_ssn))
            ) {
                tempValid = false;
            }
        }
        if (tempValid) {
            students[testTaker] = Student(
                testTaker,
                _ssn,
                _name,
                _streetAddress,
                tempValid
            );
        } else return;
    }

    function getID() public returns (uint256) {
        return testTaker;
    }

    struct Grade {
        uint256 percent;
        uint256 correct;
        uint256 wrong;
    }

    mapping(uint256 => Grade) public Grades;

    function gradeTest(string[] memory answers, string[] memory answerKey)
        public
    {
        uint256 correct;

        for (uint256 i = 0; i < answers.length; i++) {
            if (
                keccak256(abi.encodePacked(answers[i])) ==
                keccak256(abi.encodePacked(answerKey[i]))
            ) {
                correct++;
            }
        }
        Grades[testTaker].percent = (correct) / answerKey.length;
        Grades[testTaker].wrong = answerKey.length - correct;
        Grades[testTaker].correct = correct;
    }

    function getPercent(uint256 student) public returns (uint256) {
        return Grades[student].percent;
    }

    function getWrong(uint256 student) public returns (uint256) {
        return Grades[student].wrong;
    }

    function getcorrect(uint256 student) public returns (uint256) {
        return Grades[student].correct;
    }
}

contract ReceivingScores {
    mapping(uint256 => uint256) public studentScore;

    function recieveScores(
        uint256 student,
        address deployed,
        uint256 minPercent
    ) public {
        Register test = Register(deployed);

        if (test.getPercent(student) >= minPercent)
            studentScore[student] = test.getPercent(student);
        else return;
    }
}
