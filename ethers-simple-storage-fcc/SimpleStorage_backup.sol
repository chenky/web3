// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    // 当前合约的状态变量
    uint256 public favoriteNumber; // 设为 public，可以访问，默认为 0
    struct Person {
        string name;
        uint256 favoriteNumber;
    }

    // 用于存储 Person 结构体的数组
    Person[] public people;
    mapping(string => uint256) public nameToFavoriteNumber;

    // 可选的构造函数
    // constructor(uint256 _initialFavoriteNumber) {
    //     favoriteNumber = _initialFavoriteNumber; // 可选的初始化值
    // }

    // 存储最爱数字
    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    // 获取最爱数字
    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    // 添加人并保存其最爱数字
    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(Person(_name, _favoriteNumber));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}
