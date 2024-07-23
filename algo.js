// 236. Lowest Common Ancestor of a Binary Tree



// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia:

// “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”





/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = null;
        this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    function dfs(node) {
        if (node == null) {
            return null;
        }
        
        // If the current node is either p or q, return the current node
        if (node === p || node === q) {
            return node;
        }
        
        // Recursively search in the left and right subtrees
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        // If both left and right are non-null, it means p and q are found in different subtrees
        // Hence, the current node is their LCA
        if (left !== null && right !== null) {
            return node;
        }
        
        // Otherwise, return the non-null value (either left or right)
        return left !== null ? left : right;
    }

    return dfs(root);
};